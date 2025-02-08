const Post = require('../models/posts');


const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();

        if (!posts.length) {
            return res.status(404).json({ message: "No Posts Found!" });
        }

        res.render('posts', {posts})

    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
};


module.exports = getAllPosts;