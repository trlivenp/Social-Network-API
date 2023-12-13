const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.post('/post/create/:userId', postController.createPost);
router.get('/post/retrieve/:userId', postController.retrievePosts);

module.exports = router;
