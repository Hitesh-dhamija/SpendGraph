# 💰 SpendGraph - MERN Expense Manager

A full-stack Expense Tracking Application built using the MERN stack (MongoDB, Express, React, Node.js).

## 🚀 Features

- 🔐 JWT Authentication (Login / Register)
- ➕ Add Income & Expenses
- ❌ Delete Transactions
- 📊 Dashboard with financial summary
- 📈 Recent Transaction History
- 🔒 Protected Routes
- 🔄 Axios Interceptor for Token Handling
- 🧾 User-specific data isolation

---

## 🛠 Tech Stack

Frontend:

- React.js
- Styled Components
- Axios
- React Router

Backend:

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

---

## 📸 Screenshots

### 🔐 Login Page

![Login Screenshot](./screenShots/Login.png)

### 🔐 Register Page

![Register Screenshot](./screenShots/Register.png)

### 💸 Navigation Bar

![Navigation Bar Screenshot](./screenShots/NavigationBar.png)

### 📊 Dashboard

![Dashboard Screenshot](./screenShots/DashBoard.png)

### 💸 Income Page

![Income Screenshot](./screenShots/IncomeSection.png)

### 💸 Expenses Page

![Expenses Screenshot](./screenShots/Expenses.png)

---

## ⚙️ Installation

### 1️ Clone Repository

```bash
git clone https://github.com/your-username/spendgraph.git
```

### 2 Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside backend:

```env
PORT=5000
MONGO_URL=your_mongodb_connection
JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm start
```

---

### 3 Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file inside frontend:

```env
REACT_APP_BASE_URL=http://localhost:5000/api/v1/
```

Run frontend:

```bash
npm start
```
