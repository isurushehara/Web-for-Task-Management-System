# Task Management Application

A full-stack task management web application built with React, Node.js, Express, and MongoDB. This application allows users to create, manage, and organize their tasks with authentication and persistent storage.

## 🌟 Features

- ✅ **User Authentication** - Secure signup and login with JWT tokens
- 📝 **Task Management** - Create, read, update, and delete tasks
- 🔒 **Protected Routes** - Authentication required for task operations
- 🎯 **Task Filtering** - Filter tasks by status (All, Active, Completed)
- 💾 **Persistent Storage** - Tasks stored in MongoDB database
- 🎨 **Modern UI** - Clean and responsive interface built with React
- 🔐 **Secure API** - Protected endpoints with authentication middleware

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API requests
- **Vite** - Fast build tool and dev server
- **CSS3** - Custom styling

### Backend
- **Node.js** - Runtime environment
- **Express 5** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
web-for-task-ms/
├── backend/
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   ├── middleware/
│   │   └── authMiddleware.js  # JWT authentication middleware
│   ├── models/
│   │   ├── Task.js            # Task model
│   │   └── User.js            # User model
│   ├── routes/
│   │   ├── authRoutes.js      # Authentication routes
│   │   └── taskRoutes.js      # Task CRUD routes
│   ├── server.js              # Express server setup
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── api/
    │   │   ├── authApi.js     # Authentication API calls
    │   │   ├── config.js      # API configuration
    │   │   └── taskApi.js     # Task API calls
    │   ├── components/
    │   │   ├── FilterButtons.jsx
    │   │   ├── Navbar.jsx
    │   │   ├── RequireAuth.jsx
    │   │   ├── TodoInput.jsx
    │   │   ├── TodoItem.jsx
    │   │   └── TodoList.jsx
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── Login.jsx
    │   │   └── Signup.jsx
    │   ├── styles/
    │   │   └── login.css
    │   ├── utils/
    │   │   └── storage.js     # Local storage utilities
    │   ├── App.jsx
    │   └── main.jsx
    ├── index.html
    ├── vite.config.js
    └── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/isurushehara/Web-for-Task-Management-System.git
   cd web-for-task-ms
   ```

2. **Set up the Backend**
   ```bash
   cd backend
   npm install
   ```

3. **Set up the Frontend**
   ```bash
   cd ../frontend
   npm install
   ```

### Configuration

1. **Create a `.env` file in the `backend` directory:**
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

   - Replace `your_mongodb_connection_string` with your MongoDB connection string
   - Replace `your_jwt_secret_key` with a secure random string

2. **Frontend API Configuration (optional)**
   - The API base URL is configured in `frontend/src/api/config.js`
   - Default: `http://localhost:5000/api`

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   npm run dev
   ```
   The server will run on `http://localhost:5000`

2. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```
   The app will run on `http://localhost:5173` (or another port if 5173 is busy)

3. **Access the Application**
   - Open your browser and navigate to `http://localhost:5173`

## 📝 API Endpoints

### Authentication Routes (`/api/auth`)
- `POST /signup` - Register a new user
- `POST /login` - Login and receive JWT token

### Task Routes (`/api/tasks`)
- `GET /` - Get all tasks for authenticated user
- `POST /` - Create a new task
- `PUT /:id` - Update a task
- `DELETE /:id` - Delete a task

All task routes require authentication via JWT token in the Authorization header.

## 🎯 Usage

1. **Sign Up**: Create a new account
2. **Login**: Sign in with your credentials
3. **Add Tasks**: Use the input field to create new tasks
4. **Manage Tasks**: 
   - Click on a task to mark it as complete/incomplete
   - Edit tasks by clicking the edit button
   - Delete tasks using the delete button
5. **Filter Tasks**: Use the filter buttons to view All, Active, or Completed tasks

## 🔒 Security Features

- Password hashing using bcryptjs
- JWT-based authentication
- Protected API routes with authentication middleware
- HTTP-only token storage recommendations
- CORS configuration for secure cross-origin requests

## 🚢 Production Build

### Backend
```bash
cd backend
npm start
```

### Frontend
```bash
cd frontend
npm run build
npm run preview
```

The build files will be in the `frontend/dist` directory.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Isuru Shehara**
- GitHub: [@isurushehara](https://github.com/isurushehara)
- Repository: [Web-for-Task-Management-System](https://github.com/isurushehara/Web-for-Task-Management-System)

## 🙏 Acknowledgments

- React documentation
- Express.js documentation
- MongoDB documentation
- Vite documentation

---

**Note**: Make sure to set up your MongoDB database and configure the `.env` file before running the application.
