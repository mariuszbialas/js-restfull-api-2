
const { getAll, getOnePost, addOnePost, delOnePost, updateOnePost } = require('../models/blogModels');

const showAllPosts = (req, res) => {
    try {
        const resp = getAll();
        res.status(200).send(resp)
    } catch (err) {
        res.status(500).send(err);
    }
};

const showOnePost = (req, res) => {
    const { id } = req.params;
    try {
        const resp = getOnePost(id);
        res.status(200).send(resp)
    } catch (err) {
        res.status(500).send(err);
    }
};

const addPost = (req, res) => {
   
    try {
        const resp = addOnePost(req.body);
        res.status(201).send(resp)
    } catch (err) {
        res.status(500).send(err);
    }
};

const updatePost = (req, res) => {
    const { id } = req.params;
    try {
        const resp = updateOnePost(id, req.body);
        res.status(200).send(resp)
    } catch (err) {
        res.status(500).send(err);
    }
};

const delPost = (req, res) => {
    const { id } = req.params;
    try {
        const resp = delOnePost(id);
        res.status(200).send(resp)
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports = { showAllPosts, showOnePost, addPost, updatePost, delPost };