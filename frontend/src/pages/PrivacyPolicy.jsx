import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--color-bg)', color: 'var(--color-text)' }}>
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800/80 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-slate-700 backdrop-blur-sm">
        <h1 className="text-4xl font-black mb-8 italic tracking-tighter text-blue-900 dark:text-blue-400 border-l-8 border-blue-600 pl-4">
          Privacy Policy
        </h1>
        
        <div className="space-y-6 text-base leading-relaxed opacity-90">
          <section>
            <h2 className="text-xl font-bold mb-3 tracking-tight">1. Introduction</h2>
            <p>Welcome to FINDLY (IIIT Guwahati Lost & Found Management System). We value your privacy and are committed to protecting your personal data. This privacy policy informs you how we protect your personal data when you use our website and outlines your privacy rights.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 tracking-tight">2. Data We Collect</h2>
            <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Identity Data:</strong> includes first name, last name, and student/faculty ID.</li>
              <li><strong>Contact Data:</strong> includes email address and location (hostel/department/lab).</li>
              <li><strong>Technical Data:</strong> includes internet protocol (IP) address, login data, and browser type.</li>
              <li><strong>Profile Data:</strong> includes your username, password, and posts made by you.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 tracking-tight">3. How We Use Your Data</h2>
            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>To register you as a new user.</li>
              <li>To manage your posts and facilitate the return of lost items.</li>
              <li>To notify you about changes to our service or responses to your posts.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 tracking-tight">4. Data Security</h2>
            <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 tracking-tight">5. Contact Us</h2>
            <p>If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:support@iiitg.ac.in" className="text-blue-600 font-bold hover:underline">support@iiitg.ac.in</a></p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
