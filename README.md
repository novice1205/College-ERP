
# College ERP

A full-stack College ERP (Enterprise Resource Planning) system built using the MERN stack. The platform allows students, faculty, and administrators to manage academic and administrative tasks efficiently.

## Features

- **User Authentication**: Secure authentication with registration, login, and role-based access control.
- **Dashboard**: Custom dashboards for students, faculty, and administrators, displaying relevant information.
- **Student Management**: Manage student data, performance tracking, and attendance.
- **Faculty Management**: Faculty can view and update student information, manage attendance, and post assignments.
- **Course Management**: Create, update, and manage courses, assignments, and grades.
- **Notification System**: Admin can send notifications to students and faculty.
- **Email Verification**: OTP-based email verification system.
- **Forgot Password**: Reset password functionality with email-based OTP.

## Tech Stack

- **Frontend**: React.js, Axios, React Router, and Tailwind CSS for responsive UI.
- **Backend**: Node.js, Express.js with MongoDB for the database.
- **Authentication**: JWT-based authentication with cookies for sessions.
- **Styling**: Custom CSS with Tailwind for responsive design.

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/novice1205/College-ERP.git
cd college-erp
```

### 2. Install Dependencies

- Backend

```bash
cd backend
npm install
```

- Frontend

```bash
cd frontend
npm install
```

### 3. Environment Variables

Create a `.env` file in the `backend` directory with the following values:

```
PORT=5000
MONGO_URI=your_mongo_db_uri
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email_username
EMAIL_PASS=your_email_password
```

### 4. Run the Project

- Backend

```bash
cd backend
npm start
```

- Frontend

```bash
cd frontend
npm start
```

The backend will be running on `http://localhost:5000` and the frontend on `http://localhost:5173`.

### 5. API Endpoints

- `POST /api/auth/register` - Register a new user.
- `POST /api/auth/login` - Login a user.
- `POST /api/auth/verify-email` - Verify email with OTP.
- `POST /api/auth/forget-password` - Send reset password link.
- `POST /api/auth/reset-password` - Reset the password.


Let me know if you'd like any modifications or additional sections!
