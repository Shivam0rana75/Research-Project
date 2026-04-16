# 🚨 Grid Sentinel – Incident Management Dashboard

A full-stack Incident Management System designed for IT/OT environments.  
Built with a focus on **real-time incident tracking, multi-tenant architecture, and role-based access control**.

---

## 🔥 Features

### 🧠 Incident Management
- Create, view, and manage incidents
- Severity levels: Low, Medium, High, Critical
- Status control: Open, Investigating, Acknowledged, Resolved
- Timeline tracking for each incident

### 🏢 Multi-Tenant Architecture
- Organization-based data isolation
- Each user belongs to a specific organization
- All queries filtered by `organization_id`

### 👥 Role-Based Access
- **Admin / Manager**
  - Can resolve & acknowledge incidents
- **Employee**
  - Can only escalate incidents

### 🧩 Department System
- Create departments
- Assign users to departments
- Assign assets to departments

### 🖥️ Asset Management
- Create standalone assets (IT / OT)
- Track asset type, location, and criticality
- Link assets to incidents

### 📊 Dashboard & Analytics
- Dynamic tables (no static data)
- Graph-based insights
- Real-time updates from database

### 📩 Email Notifications
- Automatic email alerts when incidents are created
- Sent to:
  - Department default email
  - All users mapped to that department

---

## 🛠️ Tech Stack

### Frontend
- Next.js (App Router)
- React
- Vanilla CSS (custom UI)
- Lucide Icons

### Backend
- Next.js API Routes
- PostgreSQL (pg)

### Other
- Nodemailer (email service)
- LocalStorage (simple auth system)

---

## 🗄️ Database Schema (Core Tables)

- `organizations`
- `users`
- `departments`
- `assets`
- `incidents`
- `incident_assets`
- `incident_departments`
- `incident_timeline`
- `department_members`

---

## 🚀 Setup Instructions

### 1. Clone Repo
```bash
git clone https://github.com/your-username/grid-sentinel.git
cd grid-sentinel


2. Install Dependencies
npm install
3. Setup PostgreSQL
Create database
Run schema (tables provided in project)
4. Environment Variables

Create .env.local:

DB_USER=your_user
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=your_db

EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
5. Run Project
npm run dev

Visit:

http://localhost:3000
🔐 Authentication
Simple login system using localStorage
No JWT (intentionally lightweight for demo)
🎯 Key Highlights
Fully dynamic (no dummy data)
Clean relational database design
Multi-tenant support
Real-world incident lifecycle
Email notification system
Scalable architecture
📌 Future Improvements
JWT-based authentication
Real-time updates using WebSockets
Incident assignment system
File attachments for incidents
Audit logs
👨‍💻 Author

Shivam
B.Tech Student | Full Stack Developer

⭐ If you like this project

Give it a star ⭐ on GitHub!
