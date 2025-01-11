// Filename - index.js
const express = require('express');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const app = express();
const authenticate = require('./authenticate');
// Set up Global configuration access
dotenv.config();

let PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is up and running on ${PORT} ...`);
});

// Main Code Here //
// Generating JWT
app.post("/user/generateToken", (req, res) => {
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    let data = {
        time: Date(),
        userId: 420,
    }
    const token = jwt.sign(data, jwtSecretKey);
    res.send(token);
});

// Verification of JWT
app.get("/user/validateToken", (req, res) => {
    // Tokens are generally passed in header of request
    // Due to security reasons.
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    try {
        const verified = jwt.verify(token, jwtSecretKey);
       const user = verified.userId;
        if (verified) {
            return res.send("Successfully Verified" + user);
        } else {
            // Access Denied
            return res.status(401).send(error);
        }
    } catch (error) {
        // Access Denied
        return res.status(401).send(error);
    }
});

// Example route with authentication middleware
app.get('/protected', authenticate, (req, res) => {
    const userId = req.userId;
    res.json({ userId, data: 'Protected data'});
});
