const express = require('express');
const { getComments, createComment } = require('../controller/comment');

const router = express.Router();

router.get('/', getComments);
router.post('/', createComment);

module.exports = router;
