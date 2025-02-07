
const getAllPosts = require('../controllers/readPosts')
const getPost = require('../controllers/readPost')

const express = require('express');
const router = express.Router();

router.route('/')
        .get(getAllPosts)
        // .post(controllers.createCourse);


        
router.route('/:id')
        .get(getPost)
        // .patch(controllers.updateCourse)
//         .delete( controllers.deleteCourse);


module.exports = router
