// routes/userRoutes.js

const express = require('express');
const User = require('../model/model');
const router = express.Router();

// GET route for the home page
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.send({users });
  } catch (err) {
    console.error('Error fetching user data:', err);
    res.status(500).send('Error saving user data');
  }
});

// POST route for adding a user
router.post('/user', async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.mobile,
      age: req.body.age,
    });
    await newUser.save();
    res.send({users: await User.find() });
  } catch (err) {
    console.error('Error saving user data:', err);
    res.status(500).send('Error saving user data');
  }
});


module.exports = router;