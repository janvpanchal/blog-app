const express = require('express');
const { getAllPosts, getPostById, createPost } = require('../controllers/postController');

const router = express.Router();

router.get('/', getAllPosts);
router.get('/:id', getPostById);
router.post('/', createPost);

module.exports = router;
