# Authentication API

## 📌 Project Overview
This is a simple authentication API built using **Node.js, Express, Sequelize, and PostgreSQL**. It provides user authentication functionality, including **signup, signin, and profile updates**.

## 🚀 Features
- **Signup Endpoint:** Users can register with a unique username, email, and password.
- **Signin Endpoint:** Users can log in using their email or username.
- **Profile Update Endpoint:** Logged-in users can update their profile details (except the username).
- **Secure Authentication:** Passwords are hashed using `bcrypt` and JWT is used for authentication.

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL, Sequelize (ORM)
- **Security:** bcrypt, JWT (JSON Web Token)

## 📂 Project Setup
### 1️⃣ Clone the Repository
```sh
git clone <repository-url>
cd <project-folder>
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file in the project root and add:
```
PORT=5000
DATABASE_URL=postgres://your_username:your_password@localhost:5432/your_database
JWT_SECRET=your_secret_key
```

### 4️⃣ Start the Server
```sh
npm start
```
Or, for automatic server restarts during development:
```sh
npm run dev
```

## 📌 API Endpoints
### 1️⃣ **User Signup**
- **Endpoint:** `POST /api/auth/signup`
- **Request Body:**
```json
{
  "username": "ram",
  "email": "ram@example.com",
  "password": "securepassword"
}
```
- **Response:**
```json
{
  "message": "User registered successfully"
}
```

### 2️⃣ **User Signin**
- **Endpoint:** `POST /api/auth/signin`
- **Request Body:**
```json
{
  "identifier": "ram@example.com",
  "password": "securepassword"
}
```
- **Response:**
```json
{
  "token": "your_jwt_token",
  "message": "Login successful"
}
```

### 3️⃣ **Profile Update**
- **Endpoint:** `PUT /api/auth/profile`
- **Headers:** `{ Authorization: Bearer <token> }`
- **Request Body:**
```json
{
  "email": "newemail@example.com"
}
```
- **Response:**
```json
{
  "message": "Profile updated successfully"
}
```

## 🔒 Security Considerations
- **Passwords** are securely stored using `bcrypt` hashing.
- **JWT tokens** are used for authentication.
- **Input validation** and proper HTTP status codes are implemented.

## 📌 How to Contribute
1. Fork the repository.
2. Create a new branch.
3. Commit changes and push.
4. Create a pull request.


---
💡 Feel free to reach out if you have any questions!

