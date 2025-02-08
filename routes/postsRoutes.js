
const getAllPosts = require('../controllers/readPosts');
const getPost = require('../controllers/readPost');
const getHome = require('../controllers/readHome');
const  createPost = require('../controllers/createPost');
const  deletePost = require('../controllers/deletePost');
const  updateCourse = require('../controllers/updatePost');

const express = require('express');
const router = express.Router();

router.route('/').get(getHome);

router.route('/posts')
        .get(getAllPosts)
        .post(createPost)
       

router.get("/create-post", (req, res) => {res.render('createPostForm');});

router.route('/posts/:id')
        .get(getPost)
        .delete(deletePost)
         .put(updateCourse)

module.exports = router
