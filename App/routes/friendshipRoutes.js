// app/routes/friendshipRoutes.js
const express = require('express');
const router = express.Router();
const friendshipController = require('../controllers/friendshipController');

router.post('/friend-request/send/:senderId/:receiverId', friendshipController.sendFriendRequest);
router.put('/friend-request/update/:requestId/:status', friendshipController.updateFriendRequest);

module.exports = router;
