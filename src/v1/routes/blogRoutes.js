const express = require('express');
const bodyParser = require('body-parser');
const { showAllPosts, showOnePost, addPost, updatePost, delPost } = require('../controllers/blogControllers');

const router = express.Router();
const jsonParser = bodyParser.json();

// show all posts from a blog
router.get('/', showAllPosts);

// show one post from a blog
router.get('/:id', showOnePost);

// add one post to a blog
router.post('/', jsonParser, addPost);

// update one post to a blog
router.put('/:id', jsonParser, updatePost);

// delete one post from a blog
router.delete('/:id', delPost);

module.exports = router;