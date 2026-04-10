# 📝 Task Manager Application

A full-stack Task Manager application that allows users to create, view, update, and delete tasks with authentication support.

---

## 🚀 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios
- React Router
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Cookie Parser

---

## ✨ Features

- 🔐 User Authentication (Login / Logout)
- ➕ Create Task
- 📋 View All Tasks
- ✏️ Edit Task (Title, Description, Status)
- ✅ Mark Task as Completed / Pending
- ❌ Delete Task
- ⏳ Loading & Error Handling
- 📱 Responsive UI

---

## 📡 API Endpoints

### Auth
- POST `/api/users/login`
- POST `/api/users/logout`

### Tasks
- GET `/api/tasks/get-tasks`
- POST `/api/tasks/create-task`
- PUT `/api/tasks/update-task/:id`
- DELETE `/api/tasks/delete-task/:id`

---

## 🧠 Project Highlights

- Implemented full CRUD functionality with REST APIs
- Used Context API for global authentication state
- Designed responsive UI with Tailwind CSS
- Handled API errors and loading states for better UX
- Implemented secure authentication using cookies & JWT

---

## ⚙️ Installation & Setup

### 1. Clone Repository
```bash
git clone <your-repo-link>
cd task-manager
```
### 2. Backend Setup
- cd backend
- npm install
- npm run dev
### 3. Frontend Setup
- cd frontend
- npm install
- npm run dev
---
### 🌐 Environment Variables (.env)
- Create a .env file in backend:
```
 PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
```
---
## 📌 Notes
- Tasks are user-specific (linked with logged-in user)
- Authentication handled using HTTP-only cookies
- Designed for simplicity and clean architecture
----
### 👩‍💻 Author

Sanjana Yadav


---
