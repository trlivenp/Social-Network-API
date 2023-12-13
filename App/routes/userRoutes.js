const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// User Registration
router.post('/register', userController.registerUser);

// User Login
router.post('/login', userController.loginUser);

// Update User Profile
router.put('/profile/:userId', userController.updateUserProfile);

// Retrieve User Friends
router.get('/friends/:userId', userController.retrieveUserFriends);

module.exports = router;
