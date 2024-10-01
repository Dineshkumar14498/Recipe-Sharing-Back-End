const Comment = require('../models/comment');

const getComments = async (req, res) => {
    try {
        const comments = await Comment.find();
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createComment = async (req, res) => {
    const { username, text } = req.body;

    if (!username || !text) {
        return res.status(400).json({ message: 'Username and comment text are required' });
    }

    try {
        const newComment = new Comment({ username, text });
        await newComment.save();
        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getComments,
    createComment
};
