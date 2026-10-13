# 🔍 FINDLY – Lost & Found Management System
### Indian Institute of Information Technology Guwahati (IIIT Guwahati)

![Stack](https://img.shields.io/badge/Stack-MERN-10B981)
![Frontend](https://img.shields.io/badge/Frontend-React%20%2B%20Vite%20%2B%20Tailwind-3B82F6)
![Backend](https://img.shields.io/badge/Backend-Node.js%20%26%20Express-64748B)
![Database](https://img.shields.io/badge/Database-MongoDB-10B981)
![Institution](https://img.shields.io/badge/Institution-IIIT%20Guwahati-7C3AED)
![Status](https://img.shields.io/badge/Status-Active-22C55E)

---

## 📖 Overview

**FINDLY** is a modern, full-stack Lost and Found Management Platform tailored for the **IIIT Guwahati** campus community. It replaces fragmented WhatsApp groups and notice board messages with an intelligent, centralized, and accountable digital portal for reporting, tracking, and reuniting campus members with their lost belongings.

---

## 👥 Project Team

**MTech CSE – 1st Semester (On Campus)**  
**Indian Institute of Information Technology Guwahati**

| Name | Role / Department |
| :--- | :--- |
| **Abhijit Baishya** | MTech CSE (1st Sem), IIIT Guwahati |
| **Bigan Kumar** | MTech CSE (1st Sem), IIIT Guwahati |
| **Pragyan Paul** | MTech CSE (1st Sem), IIIT Guwahati |

---

## 🚀 Key Features

- 🔐 **Authentication & Security:** JWT-based authentication, password recovery, and multi-role access (Users, Keepers, Admins).
- 📤 **Item Reporting:** Report lost items and submit found items with detailed category tagging and image attachments.
- 🤖 **Smart AI Matching:** Intelligent semantic matching connecting lost reports with newly submitted found items.
- 🔎 **Real-time Search & Filtering:** Filter items by category, location, status (Lost, Found, Claimed, Returned), and date.
- 🛡️ **Verified Chain of Custody:** Campus "Keepers" system and QR verification for safe handoffs and accountability.
- 💬 **Live Chat & Notifications:** Real-time updates and notifications powered by Socket.IO.
- 📊 **Administrative Dashboard:** Comprehensive management portal for user oversight and item audit logs.

---

## 🏗️ System Architecture & Tech Stack

- **Frontend:** React 19, Vite, Tailwind CSS, Framer Motion, Lucide & React Icons
- **Backend:** Node.js, Express.js (v5), Socket.IO, Mongoose, Swagger UI
- **Database:** MongoDB (Supports both local in-memory development and persistent/Atlas instances)
- **Image Storage:** Cloudinary
- **AI Matching:** Google Gemini API

---

## ⚡ Quick Start Guide

### 1. Prerequisites
- **Node.js** (v20+ or v22 LTS recommended)
- **npm** (v10+)

### 2. Backend Setup
```bash
cd backend
npm install
npm run dev
```
> The backend runs on **`http://localhost:5001`**.  
> *Note: For local development, an in-memory MongoDB server runs automatically if no external URI is provided, and automatically seeds sample categories and users.*

### 3. Frontend Setup
In a new terminal:
```bash
cd frontend
npm install
npm run dev
```
> The frontend client runs on **`http://localhost:5173`**.

---

## 🔑 Default Credentials (Development Mode)

| Role | Email | Password |
| :--- | :--- | :--- |
| **Admin** | `admin@iiitg.ac.in` | `adminpassword123` |
| **Test Member** | `member@test.com` | `password123` |

---

## 📁 Repository Structure

```text
FINDLY/
├── backend/              # Express API & MongoDB Models
│   ├── config/           # Database & Cloudinary configurations
│   ├── controllers/      # Route controllers (auth, item, user, chat)
│   ├── middlewares/      # Auth, CORS, logger & rate limit middlewares
│   ├── models/           # Mongoose schemas (User, Item, Conversation)
│   ├── routes/           # RESTful API endpoints
│   ├── utils/            # Sockets, seeders & email utilities
│   └── index.js          # Backend server entry point
│
└── frontend/             # Vite + React Client
    ├── public/           # Static assets, SVG logos & favicon
    └── src/
        ├── components/   # Reusable UI components & navigation
        ├── context/      # Authentication & Theme contexts
        ├── pages/        # Views (Home, Landing, Dashboard, Auth)
        └── services/     # Axios API service handlers
```

---

## 📜 License
Developed for the **Indian Institute of Information Technology Guwahati (IIIT Guwahati)** campus community.
