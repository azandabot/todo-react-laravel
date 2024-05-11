# Todo Task Application

This repository contains the code for a Todo Task Application built with React for the frontend and Laravel for the backend.

## Overview

The Todo Task Application allows users to manage their tasks efficiently. Users can register, log in, create, view, edit, and delete tasks. The application provides a clean and intuitive user interface powered by React on the frontend and Laravel's robust backend structure.

## Features

- **User Registration and Authentication:** Users can sign up for an account and log in securely.
- **Task Management:** Users can view, create, edit, and delete tasks.
- **Responsive Design:** The application is designed to be fully responsive, ensuring a seamless experience across devices.

## Backend (Laravel)

### Setup

1. **Install Laravel:**
   - Ensure Composer is installed: [Composer Installation Guide](https://getcomposer.org/doc/00-intro.md)
   - Install Laravel globally: `composer global require laravel/installer`
   - Create a new Laravel project: `laravel new todo-app`
   - Navigate into the project directory: `cd todo-app`

2. **Database Setup:**
   - Configure your `.env` file with database credentials.
   - Migrate the database: `php artisan migrate`
   - Optionally, seed the database with sample data: `php artisan db:seed`

3. **Authentication and API:**
   - Install Laravel Breeze for authentication: `composer require laravel/breeze --dev`
   - Run Breeze's installation command: `php artisan breeze:install`
   - Run migrations to create necessary tables: `php artisan migrate`
   - Add API routes for todo tasks in `routes/api.php`.
   - Implement CRUD operations for todo tasks in corresponding controllers.

### Testing and Validation

- PHPUnit tests ensure authentication, CRUD operations, and error handling are robustly implemented.
- Validation rules in controllers guarantee data integrity and error prevention.

### Version Control

- Utilize Git for version control.
- Commit changes with descriptive messages: `git commit -m "Implemented user registration feature"`

## Frontend (React)

### Setup

1. **Initialize React App:**
   - Ensure Node.js is installed: [Node.js Installation Guide](https://nodejs.org/en/download/)
   - Initialize a new React app using Create React App: `npx create-react-app frontend`
   - Navigate into the frontend directory: `cd frontend`

2. **Dependencies Installation:**
   - Install necessary dependencies: `npm install`

3. **Environment Configuration:**
   - Set environment variables for API endpoints.

### User Interface

- Design user-friendly UI components for seamless interaction.
- Utilize React Router for smooth navigation between pages.

### API Integration

- Utilize Axios for making HTTP requests to Laravel backend.
- Implement functions to consume API endpoints for authentication and todo tasks.

### Testing

- Write unit tests using Jest and React Testing Library.
- Test components, API integration, and user interactions comprehensively.

### Version Control

- Initialize a Git repository: `git init`
- Add all files: `git add .`
- Commit changes with descriptive messages: `git commit -m "Implemented task creation feature"`

## Bonus: Docker Containerization

### Setup

1. **Docker Setup:**
   - Write Dockerfiles for both Laravel backend and React frontend.
   - Write a docker-compose.yaml file to orchestrate containers.

2. **Build and Run Docker Containers:**
   - Build Docker images: `docker-compose build`
   - Run Docker containers: `docker-compose up -d`

3. **Testing Application in Docker:**
   - Access the application in a browser using Docker container IPs or localhost.

## Submission Requirements

- Public GitHub repository with descriptive commits for both frontend and backend.
- Instructions on how to run the application locally with or without Docker.
- Comprehensive README documenting the application's features, setup instructions, API endpoints, and any additional notes.
- Adherence to Laravel best practices, SOLID principles, and design patterns.
- Thorough testing with PHPUnit and React Testing Library.
- Implementation of user authentication, CRUD operations, error handling, and validation.
- Clear and concise code with proper documentation.

## Conclusion

This Todo Task Application demonstrates proficiency in React and Laravel development. It adheres to best practices, provides a seamless user experience, and is well-documented for easy setup and maintenance. For any further inquiries or assistance, feel free to contact the developer.
