# User Search Application

This project is a user search application built with React for the frontend and Node.js for the backend. The application allows users to search for other users based on their email and number. The backend includes a simulated delay to mimic a long processing time.

## Features

- Form with email (required) and number (optional) fields.
- Email and number validation.
- Number input mask to display numbers with dashes every two digits (e.g., 22-11-22, 83-03-47).
- Backend processing delay of 5 seconds.
- Cancellation of previous request upon a new request.
- Display of search results on the client.

## Technologies Used

- Frontend: React, Axios, react-input-mask
- Backend: Node.js, Express, TypeScript

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <repository-directory>
```

2. Install dependencies for both frontend and backend:
```bash
cd frontend
npm install
cd ../backend
npm install
```

# Running the Application

## Frontend
### 1. Navigate to the frontend directory:
```bash
cd frontend
```
### 2. Start the frontend:
```bash
npm start
```

## Backend
1. Navigate to the backend directory:

```bash
cd backend
```

2. Compile the TypeScript code and start the backend
```bash
npm start
```

# Project Structure

```bash
.
├── backend
│   ├── dist
│   │   └── index.js
│   ├── node_modules
│   ├── src
│   │   └── index.ts
│   ├── package.json
│   └── tsconfig.json
└── frontend
    ├── node_modules
    ├── public
    ├── src
    │   └── App.js
    ├── package.json
    └── README.md
```

# API

## POST /search

### Search for users by email and number.
* ***URL:*** `http://localhost:5000/search`
* ***Method:*** `POST`
* ***Headers:*** `Content-Type: application/json`
* ***Body:***
```json
{
  "email": "string",
  "number": "string (optional)"
}
```

* ***Response:***
```json
[
  {
    "email": "string",
    "number": "string"
  }
]
```

# Notes
* The backend includes a simulated delay of 5 seconds to mimic long processing time.
* If a new request is made before the previous request completes, the previous request will be canceled.

# Contact
For any questions or feedback, please contact:

* Name: Muhammadali Yuldoshev
* Email: mukhammadaliweb@gmail.com