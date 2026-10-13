require('dotenv').config();
const http = require('http');
const connectDB = require('./config/db');
const mainRouter = require('./routes/index.routes');
const express = require('express');
const path = require('path');
const fs = require('fs');
const seed = require('./utils/seedCategory');
const initSocket = require('./utils/socket');
const swaggerui = require('swagger-ui-express')
const swaggerjsdocs = require('swagger-jsdoc')
const User = require('./models/user.model');

const { errorHandler } = require('./middlewares/error.middleware');
const loggerMiddleware = require('./middlewares/logger.middleware');
const { corsConfig } = require('./middlewares/cors.middleware');
const { notFound } = require('./middlewares/notFound.middleware');
const { rateLimiter } = require('./middlewares/rateLimit.middleware');

const requiredEnvVars = ['PORT', 'FRONTEND_URL', 'JWT_SECRET'];
const missingVars = requiredEnvVars.filter((varName) => !process.env[varName]);
if (missingVars.length > 0) {
  console.error(`Missing required environment variables: ${missingVars.join(', ')}. Please check your .env file.`);
  process.exit(1);
}

if (!process.env.MONGODB_URI && !process.env.MONGO_URI) {
  console.log('No external MongoDB URI configured. Using in-memory MongoDB for local development.');
}

const app = express();
const server = http.createServer(app);

app.use(loggerMiddleware);
app.use(corsConfig);
app.use(express.json());
app.use(rateLimiter);

const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}
app.use(
  '/uploads',
  express.static(uploadsDir, {
    setHeaders: (res) => {
      res.set('X-Content-Type-Options', 'nosniff');
    },
  })
);

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', websocket: 'supported' });
});

app.get('/ws-test', (req, res) => {
  res.setHeader('Connection', 'Upgrade');
  res.setHeader('Upgrade', 'websocket');
  res.status(426).end('Upgrade Required');
});

app.use('/api/v1', mainRouter);

const options = {
  definition: {
    openapi: '3.0.0', 
    info: {
      title: 'FINDLY API docs',
      description: 'RESTful API documentation for FINDLY - IIIT Guwahati Lost & Found Management System'
    },
    servers: [
      {
        url: process.env.BACKEND_URL || 'http://localhost:5001',
      },
    ],
  },
  apis: ['./routes/*.js'],
}

const specs = swaggerjsdocs(options)
app.use('/api-docs', swaggerui.serve, swaggerui.setup(specs))

app.use(notFound);
app.use(errorHandler);

const io = initSocket(server);
app.set('io', io);

const shutdown = () => {
  console.log('Shutting down server...');
  server.close(() => {
    console.log('Server closed.');
    process.exit(0);
  });
};
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

const seedDefaultUsers = async () => {
  const defaultUsers = [
    { name: 'Test Member', email: 'member@test.com', password: 'password123', role: 'user', isActive: true },
    { name: 'IIITG Admin', email: 'admin@iiitg.ac.in', password: 'adminpassword123', role: 'admin', isActive: true },
  ];

  for (const userData of defaultUsers) {
    const existingUser = await User.findOne({ email: userData.email.toLowerCase() });
    if (!existingUser) {
      await User.create(userData);
      console.log(`Seeded default user: ${userData.email}`);
    } else {
      existingUser.isActive = true;
      existingUser.role = userData.role;
      if (userData.password) existingUser.password = userData.password;
      await existingUser.save();
      console.log(`Updated default user: ${userData.email}`);
    }
  }
};

const startServer = async () => {
  try {
    await connectDB();
    await seed(); //Seeds Category and subCategory data
    await seedDefaultUsers();
    server.on('error', (err) => {
      console.error('Server error:', err.message);
    });
    server.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();