# User Management Dashboard

A modern React application to display and manage user information with a clean, responsive interface.

## Features
- View list of all users
- Detailed user profiles with contact information
- Clean, modern UI with Tailwind CSS
- Easy navigation with React Router
- Centralized state management using Redux

## Technologies Used
- React.js
- Redux
- React Router
- Tailwind CSS
- Lucide React Icons

## Getting Started

1. Clone and install dependencies:
```bash
git clone [repository-url]
cd user-management-dashboard
npm install
```

2. Start the application:
```bash
npm start
```

Visit `http://localhost:3000` to view the app.

## Project Structure
```
src/
├── components/          # React components
├── redux/              # Redux store and slices
└── App.js              # Main component
```

## Available Routes
- `/` - Home page with user list
- `/user/:id` - User details page

## Component Details

### UserInfo Component
Displays user details including:
- Personal information
- Contact details
- Company information
- Address

