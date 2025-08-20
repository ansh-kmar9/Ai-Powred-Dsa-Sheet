# DSA Sheet Tracker

A full-stack web application to track progress across multiple Data Structures and Algorithms (DSA) question sheets. Built with React frontend and Express.js backend.

## Features

- **Google OAuth Authentication** - Secure login with Google account
- **Multiple DSA Sheets** - Track progress across 5 different sheets:
  - DSA360
  - SDE Sheet
  - Blind75
  - Interview Questions
  - Supreme Sheet
- **Progress Tracking** - Mark questions as solved/unsolved with persistent storage
- **Dashboard Overview** - Visual progress bars for each sheet
- **Responsive Design** - Works on desktop and mobile devices
- **Clean UI** - Built with TailwindCSS and shadcn/ui components

## Tech Stack

### Frontend

- React.js with Vite
- TailwindCSS for styling
- shadcn/ui components
- React Router for navigation
- Axios for API calls

### Backend

- Node.js with Express.js
- MongoDB with Mongoose
- Google OAuth 2.0
- JWT for session management
- MVC architecture

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- Google OAuth credentials

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd dsaSite
   ```

2. **Backend Setup**

   ```bash
   cd server
   npm install
   ```

3. **Frontend Setup**

   ```bash
   cd ../client
   npm install
   ```

4. **Environment Configuration**

   Create `.env` file in the server directory:

   ```env
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/dsa-tracker
   JWT_SECRET=your_jwt_secret_key_here

   # Google OAuth
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   GOOGLE_CALLBACK_URL=http://localhost:5000/auth/google/callback

   # Frontend URL
   CLIENT_URL=http://localhost:3000

   # Session Secret
   SESSION_SECRET=your_session_secret_here
   ```

5. **Database Seeding**

   Seed the database with sample DSA questions:

   ```bash
   cd server
   npm run seed
   ```

### Running the Application

1. **Start the backend server**

   ```bash
   cd server
   npm run dev
   ```

   Server will run on http://localhost:5000

2. **Start the frontend**
   ```bash
   cd client
   npm run dev
   ```
   Client will run on http://localhost:3000

## API Endpoints

### Authentication

- `GET /auth/google` - Initiate Google OAuth
- `GET /auth/google/callback` - Google OAuth callback
- `GET /auth/user` - Get current user info
- `POST /auth/logout` - Logout user
- `POST /auth/verify` - Verify JWT token

### Sheets

- `GET /api/sheets` - Get all sheets
- `GET /api/sheets/:sheetName` - Get specific sheet with questions
- `GET /api/sheets/:sheetName/stats` - Get sheet statistics

### Progress

- `GET /api/progress/overview` - Get overall progress summary
- `GET /api/progress/:sheetName` - Get progress for specific sheet
- `POST /api/progress/:sheetName/:questionId` - Toggle question solved status
- `DELETE /api/progress/:sheetName` - Reset sheet progress

## Database Schema

### User Schema

```javascript
{
  googleId: String,
  name: String,
  email: String,
  picture: String,
  progress: {
    DSA360: { solvedCount: Number, questions: [{ questionId, isSolved }] },
    SDE: { solvedCount: Number, questions: [{ questionId, isSolved }] },
    // ... other sheets
  }
}
```

### Sheet Schema

```javascript
{
  name: String,
  topics: [{
    name: String,
    questions: [{
      title: String,
      difficulty: String, // Easy, Medium, Hard
      link: String,
      isSolved: Boolean
    }]
  }]
}
```

## Project Structure

```
dsaSite/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React context
│   │   └── utils/         # Utility functions
│   └── package.json
├── server/                # Express backend
│   ├── src/
│   │   ├── controllers/   # Route controllers
│   │   ├── models/        # Mongoose models
│   │   ├── routes/        # API routes
│   │   ├── middleware/    # Custom middleware
│   │   ├── config/        # Configuration files
│   │   └── scripts/       # Database scripts
│   └── package.json
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.
