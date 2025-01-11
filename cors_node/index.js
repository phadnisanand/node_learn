// Filenamr index.js

const express = require('express');
const cors = require('cors');
const app = express();

// CORS options to allow requests from frontend running on port 5500
const corsOptions = {
  origin: 'http://localhost:3001', // Allow only requests from this origin
  methods: 'GET,POST', // Allow only these methods
  allowedHeaders: ['Content-Type', 'Authorization'] // Allow only these headers
};

// Use CORS middleware with specified options
app.use(cors(corsOptions));

app.get('/api/data', (req, res) => {
  const responseData = {
    message: "Hello, GFG Learner",
    articleData: {
      articleName: "How to send JSON response from NodeJS",
      category: "NodeJS",
      status: "published"
    },
    endingMessage: "Visit Geeksforgeeks.org for more"
  };
  res.json(responseData);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
