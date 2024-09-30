const express = require('express');
const commentController = require('../controller/comment'); 
const router = express.Router();

// Fetch comments for a specific recipe
router.get('/:recipeId', commentController.getComments);

// Post a new comment for a specific recipe
router.post('/:recipeId', commentController.addComment);

module.exports = router;
