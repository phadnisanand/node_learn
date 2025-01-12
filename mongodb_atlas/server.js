//server.js

const express = require('express');
const connectDB = require('./database/db');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 3000;

// Connect to the database
connectDB();

app.use(express.json());

// Routes
app.use('/', userRoutes);

// Start the server
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is started at port ${port}`);
  }
});