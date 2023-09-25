const db = require('../database/db.json');

// get all posts
const getAll = () => {
    try {
        return db.blog;
    } catch (err) {
        console.error('getAll Blog error', err);
    }
}

// get one post
const getOnePost = (id) => {
    try {
        const index = db.blog.findIndex(post => post.id == id);
        if(index === -1) return {status: 404, message: `Couldn't find post with id:${id}`};
        return db.blog.filter(post => post.id == id);
    } catch (err) {
        console.error('getOnePost Blog error', err);
    }
}

// add a post
const addOnePost = post => {
    try {
        return { status: 'OK', message: post };
    } catch (err) {
        console.error('addOnePost Blog error', err);
    }
}

// update one post
const updateOnePost = (id, post) => {
    try {
        const index = db.blog.findIndex(post => post.id == id);
        if(index === -1) return {status: 404, message: `Couldn't find post with id:${id}`, post: post};
        return { status: 'OK', message: `Post with id:${id} updated`, post: post};
    } catch (err) {
        console.error('updateOnePost Blog error', err);
    }
}

// delete one post
const delOnePost = id => {
    try {
        const index = db.blog.findIndex(post => post.id == id);
        if(index === -1) return {status: 404, message: `Couldn't find post with id:${id}`};
        return { status: 'OK', message: `Post with id:${id} deleted`  };
    } catch (err) {
        console.error('delOnePost Blog error', err);
    }
}

module.exports = { getAll, getOnePost, addOnePost, updateOnePost, delOnePost };