# MERN-Stack-Bus-Ticket-Booking-Application
A full-stack bus ticket booking web application built with the MERN (MongoDB, Express, React, Node.js) stack. Features JWT authentication, dynamic bus searching, and an interactive seat selection interface.

# MERN Stack Bus Ticket Booking Application 🚌

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)  
![React](https://img.shields.io/badge/React-17.0.2-blue?logo=react)  
![Node.js](https://img.shields.io/badge/Node.js-16.x-green?logo=nodedotjs)  
![Express](https://img.shields.io/badge/Express-4.x-orange)  
![MongoDB](https://img.shields.io/badge/MongoDB-5.x-green?logo=mongodb)  

A full-stack bus ticket booking web application built with the MERN (MongoDB, Express, React, Node.js) stack. This project demonstrates a complete user flow from authentication to ticket generation. Originally assigned by Cognizant during an internship.  

---

## 📸 Application Preview  

*(To add a preview, take a screenshot of your running application, save it as preview.png inside a new folder named documentation, and the image will appear here.)*  

![Bus App Preview](./documentation/preview.png)  

---

## ✨ Key Features  

- *Secure User Authentication*: Sign-up and Sign-in functionality using JWT (JSON Web Tokens) and Passport.js for protected routes.  
- *Password Hashing*: User passwords are securely hashed using bcrypt before being stored.  
- *Dynamic Bus Search*: Users can search for available buses by selecting a starting city, destination city, and journey date.  
- *Interactive Seat Selection*: A user-friendly, clickable seat map interface to select and deselect seats.  
- *Dynamic Passenger Forms*: As seats are selected, forms are dynamically generated to capture passenger details.  
- *Ticket Confirmation*: A final confirmation page that displays ticket details and a unique transaction ID.  
- *RESTful API*: A well-structured backend API built with Express.js and Mongoose.  

---

## 🛠 Tech Stack  

| Category           | Technology                                       |  
| ------------------ | ------------------------------------------------ |  
| *Frontend*       | React.js, React Router, Axios, Bootstrap         |  
| *Backend*        | Node.js, Express.js                              |  
| *Database*       | MongoDB (with Mongoose)                          |  
| *Authentication* | Passport.js, JSON Web Tokens (JWT), bcrypt.js    |  
| *Development*    | Concurrently, Nodemon                            |  

---

## 🚀 Getting Started  

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.  

### Prerequisites  

- [Node.js](https://nodejs.org/) (v16.x or later recommended)  
- [npm](https://www.npmjs.com/)  
- A running MongoDB instance (either local or a free [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cluster)  

### Installation & Setup  

*1. Clone the repository:*  
```bash
git clone https://github.com/YourUsername/MERN-BUS-APP.git
cd MERN-BUS-APP

2. Set up the Backend:

# Navigate to the backend folder
cd backend

# Install dependencies
npm install

3. Configure Backend Environment:
In the backend/config folder, open the keys.js file.
Modify the MongoURI to point to your MongoDB instance. For a local setup:

module.exports = {
  MongoURI: "mongodb://localhost:27017/bus-app-db"
}

4. Set up the Frontend:

# Navigate to the frontend folder from the root directory
cd ../frontend

# Install dependencies
npm install


5. Fix for modern Node.js versions (if needed):
Older React scripts can have issues with Node v17+. If npm start fails with an OpenSSL error, open frontend/package.json and modify the start script:

"scripts": {
  "start": "set NODE_OPTIONS=--openssl-legacy-provider && react-scripts start",
  "build": "set NODE_OPTIONS=--openssl-legacy-provider && react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
}

🏃 Running the Application

You will need two separate terminals to run both the frontend and backend servers.

1. Run the Backend Server:

# In your first terminal, from the /backend folder
npm run devStart

2. Run the Frontend Application:

# In your second terminal, from the /frontend folder
npm start


📁 Project Structure
MERN-BUS-APP/
├── backend/
│   ├── auth/         # Authentication logic (Passport.js)
│   ├── config/       # Configuration files (keys, database)
│   ├── models/       # Mongoose schemas (User, Bus)
│   ├── routes/       # API routes
│   └── app.js        # Main Express server file
│
└── frontend/
    └── src/
        ├── components/ # Reusable React components
        ├── App.js      # Main application component with routing
        └── index.js    # Entry point for the React app
