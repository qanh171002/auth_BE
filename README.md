# 🔐 Authentication Backend API

Một RESTful API backend được xây dựng bằng Node.js và Express.js để xử lý authentication với JWT và PostgreSQL.

## 🚀 Demo

**Frontend:** [https://auth-fe-livid.vercel.app](https://auth-fe-livid.vercel.app)

**Backend API:** [https://auth-be-2.onrender.com](https://auth-be-2.onrender.com)

## 🛠️ Công nghệ sử dụng

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** PostgreSQL
- **ORM:** Sequelize
- **Authentication:** JWT (JSON Web Tokens)
- **Password Hashing:** bcrypt
- **CORS:** Cross-Origin Resource Sharing

## 📁 Cấu trúc dự án

```
auth_BE/
├── config/
│   └── db.js              # Database configuration
├── controllers/
│   └── userController.js   # User authentication logic
├── models/
│   └── user.js            # User model definition
├── routes/
│   └── userRoute.js       # API routes
├── server.js              # Main server file
├── package.json           # Dependencies
└── README.md             # This file
```

## 🚀 Cài đặt và chạy

### Yêu cầu hệ thống

- Node.js (version 14 trở lên)
- PostgreSQL database

### Bước 1: Clone repository

```bash
git clone https://github.com/qanh171002/auth_BE
cd auth_BE
```

### Bước 2: Cài đặt dependencies

```bash
npm install
```

### Bước 3: Cấu hình environment variables

Tạo file `.env` trong thư mục gốc:

```env
DATABASE_URL=postgresql://username:password@localhost:5432/database_name
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

### Bước 4: Chạy server

```bash
npm start
```

Server sẽ chạy tại `http://localhost:5000`

## 📚 API Endpoints

### Base URL: `https://auth-be-2.onrender.com/api`

| Method | Endpoint       | Description                 | Body                                                            |
| ------ | -------------- | --------------------------- | --------------------------------------------------------------- |
| `POST` | `/auth/signup` | Đăng ký tài khoản mới       | `{ "name": "string", "email": "string", "password": "string" }` |
| `POST` | `/auth/login`  | Đăng nhập                   | `{ "email": "string", "password": "string" }`                   |
| `GET`  | `/me`          | Lấy thông tin user hiện tại | Header: `Authorization: Bearer <token>`                         |
