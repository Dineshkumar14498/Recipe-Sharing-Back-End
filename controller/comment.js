// controllers/commentController.js
const Comment = require('../models/comment'); // Adjust the path as necessary

// Fetch comments for a specific recipe
exports.getComments = async (req, res) => {
    try {
        const comments = await Comment.find({ recipeId: req.params.recipeId }).sort({ createdAt: -1 });
        res.json(comments);
    } catch (error) {
        console.error('Error fetching comments:', error);
        res.status(500).json({ message: 'Error fetching comments' });
    }
};

// Post a new comment for a specific recipe
exports.addComment = async (req, res) => {
    const { comment } = req.body;

    // Check if comment is empty
    if (!comment || comment.trim() === "") {
        return res.status(400).json({ message: 'Comment cannot be empty' });
    }

    const newComment = new Comment({
        recipeId: req.params.recipeId,
        comment,
    });

    try {
        const savedComment = await newComment.save();
        res.status(201).json(savedComment);
    } catch (error) {
        console.error('Error posting comment:', error);
        res.status(400).json({ message: 'Error posting comment' });
    }
};
