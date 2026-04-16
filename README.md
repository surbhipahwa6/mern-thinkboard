# 📝 MERN Notes App

A simple and responsive **full-stack note-taking application** built using the MERN stack.
This project was created as part of my learning journey to understand how real-world full-stack applications are designed, built, and deployed.

---

## 🚀 Overview

This app allows users to create, edit, and delete notes with ease.
While building it, I explored how frontend and backend systems communicate, how APIs are structured, and how to manage data efficiently using MongoDB.

---

## 🧩 Features

* ✨ Create, update, and delete notes
* 🧱 Full-stack architecture using MongoDB, Express, React, and Node.js
* ⚡ REST API with proper HTTP methods and status codes
* 🔐 Rate limiting implemented using Redis (Upstash)
* 📱 Fully responsive UI
* 🧪 Environment-based configuration using `.env`

---

## 🛠️ Tech Stack

**Frontend**

* React
* Axios
* Tailwind CSS

**Backend**

* Node.js
* Express.js

**Database**

* MongoDB

**Other Tools**

* Upstash Redis (Rate Limiting)
* dotenv

---

## 📚 What I Learned

* Building a **RESTful API from scratch**
* Connecting React frontend with backend services
* Handling **CRUD operations** in a real application
* Understanding **rate limiting and backend performance concepts**
* Working with **environment variables and project structure**
* Debugging common issues in full-stack apps

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone <your-repo-link>
cd <your-project-folder>
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside `/backend`:

```env
MONGO_URI=your_mongodb_connection_string
UPSTASH_REDIS_REST_URL=your_redis_url
UPSTASH_REDIS_REST_TOKEN=your_redis_token
NODE_ENV=development
```

Run backend:

```bash
npm run dev
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🙌 Acknowledgment

This project was built as part of my learning process by following online resources and tutorials, and then implementing the concepts independently to strengthen my full-stack development skills.

---

## 🔗 Connect with Me

* Portfolio: (https://surbhipahwa6.github.io/Surbhi_Pahwa_Portfolio/)
* GitHub: (https://github.com/surbhipahwa6)
* LinkedIn: (https://www.linkedin.com/in/surbhi-pahwa-772166149/)

---
