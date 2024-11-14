
# Daily Task Manager

## Overview

This Daily Task Manager app is a web-based tool designed for organizing and tracking tasks for clients. Users can:

Register and log in (via email/password or Google OAuth).
Add and view clients and assign tasks to each client.
Mark tasks as complete to keep track of progress.
Track task status and manage to-do lists efficiently with an easy-to-use interface.
Built with Node.js, Express, MongoDB, and Passport for authentication, the app also uses Handlebars for templating and Bootstrap for a responsive and accessible design.

It includes user authentication, supports Google OAuth for login, and provides a straightforward interface to add, view, and manage tasks for various clients.

## Features

- **User Authentication**: Register and log in with email and password or via Google OAuth.
- **Client Management**: Add and list clients with personal details.
- **Task Management**: Add and track tasks associated with clients.
- **Real-time Updates**: Uses sessions for persistent user sessions and task updates.

## Tech Stack

- **Node.js** with **Express** for server-side functionality
- **MongoDB** as the database
- **Passport** for authentication with local and Google strategies
- **Handlebars (HBS)** as the view engine
- **Bootstrap** for responsive design

## Setup and Installation

### 1. Clone the Repository

```bash
git clone https://github.com/hamed.aryanfar/daily-task-manager.git
cd daily-task-manager
```

### 2. Install Dependencies

Install the required dependencies as defined in `package.json`:

```bash
npm install
```

### 3. Environment Variables

variables:

```plaintext
# MongoDB Connection String
MONGO_DB_CONNECTION=mongodb+srv://your-username:your-password@cluster0.mongodb.net/?retryWrites=true&w=majority

# Google OAuth Credentials
GOOGLE_CLIENT_ID=.....
GOOGLE_CLIENT_SECRET=.....
GOOGLE_CALLBACK_URL=http://localhost:3000/auth/google/callback

# Session Secret
SESSION_SECRET=.....
```

### 4. Start the Application

To start the application, run:

```bash
npm start
```

By default, the application runs on `http://localhost:3000`.




### Authentication

- **Register**: Users can register with email and password.
- **Login**: Users can log in either with their email or through Google OAuth.

### Client Management

- Navigate to `/clients` to view a list of clients.
- Use `/clients/add` to add a new client.

### Task Management

- Navigate to `/tasks` to view a list of tasks.
- Use `/tasks/add` to add a new task for a specific client.

## Environment Configuration

- **MongoDB**: This app uses a MongoDB connection string with a database hosted on MongoDB Atlas.
- **Google OAuth**: Google OAuth is configured for user login and requires client credentials from Google Developer Console.

## Routes

### Authentication Routes

- **GET /login**: Renders the login page for users to log in via email or GitHub.
- **POST /login**: Processes login credentials for email/password authentication.
- **GET /register**: Renders the registration form.
- **POST /register**: Registers a new user with email and password.
- **GET /logout**: Logs the user out and redirects to the login page.
- **GET /auth/google** and **GET /auth/google/callback**: Routes for Google OAuth login.
- **GET /auth/github** and **GET /auth/github/callback**: Routes for GitHub OAuth login.

### Project Routes

- **GET /projects**: Displays a list of projects (only accessible to logged-in users).
- **GET /projects/add**: Renders the form to add a new project (authentication required).
- **POST /projects/add**: Adds a new project to the database.
- **GET /projects/edit/:id**: Renders the edit form for a project by ID.
- **POST /projects/edit/:id**: Updates the project details in the database.
- **GET /projects/delete/:id**: Deletes a specific project (redirects to the project list).

### Course Routes

- **GET /courses**: Displays a list of courses (only accessible to logged-in users).
- **GET /courses/add**: Renders the form to add a new course (authentication required).
- **POST /courses/add**: Adds a new course to the database.
- **GET /courses/edit/:id**: Renders the edit form for a course by ID.
- **POST /courses/edit/:id**: Updates the course details in the database.
- **GET /courses/delete/:id**: Deletes a specific course (redirects to the course list).

## Access Control

Access control is handled at both the view and route levels to ensure secure and restricted access:

- **Conditional Rendering in Views**: The navigation bar and CRUD buttons are displayed based on user login status. For instance, the Add and Actions buttons only appear to logged-in users.
- **Authentication Middleware**: An `IsLoggedIn` middleware function checks if a user is authenticated. This middleware is added to each CRUD route in `projects.js` and `courses.js`, blocking access to anonymous users.
- **Reusable Middleware**: The `IsLoggedIn` function is saved in `extensions/authentication.js`, making it reusable across routes. This middleware is essential for ensuring unauthorized users cannot directly access URLs like `/projects/add`.


## Dependencies

```json
{
  "dotenv": "^16.3.1",
  "express": "^4.21.1",
  "mongoose": "^7.6.3",
  "passport": "^0.6.0",
  "passport-google-oauth20": "^2.0.0",
  "passport-local": "^1.0.0",
  "passport-local-mongoose": "^8.0.0"
}
```

For a full list, see `package.json`.

## License

This project is licensed under the Hamed License.
