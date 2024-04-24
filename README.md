# pani-mt

This is a Node.js application that provides user signup and login functionality. It ensures user passwords are hashed and stored securely in a MongoDB database. Additionally, it enforces uniqueness for both usernames and email addresses. Express-validator is used for basic payload validation.

## Prerequisites

Make sure you have the following installed on your system:

- Node.js
- MongoDB

## Getting Started

Follow these steps to run the application:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Change directory to the backend folder:

   ```bash
   cd backend
   ```

3. Install the required npm packages:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   npm start
   ```

## Features

- User signup: Allows users to create an account with a unique username and email address.
- User login: Registered users can log in to access the application's features.
- Password hashing: User passwords are securely hashed before being stored in the database.
- Unique constraints: Enforces uniqueness for both usernames and email addresses to prevent duplicate accounts.
- Payload validation: Uses express-validator to validate incoming request payloads.

## Technologies Used

- Node.js
- Express.js
- MongoDB

## API Documentation
Explore the API endpoints using Swagger:

[Swagger Docs](http://localhost:3000/api-docs/)

To authenticate for the api first use login or signup api.
Access Swagger documentation at: Swagger Docs: http://localhost:3000/api-docs/
Locate the lock icon on the top right corner of the Swagger interface.
Click on the lock icon and enter your JWT token in the following format:
Bearer <your_jwt_token_here>


## License

This project is licensed under the [MIT License](LICENSE).
