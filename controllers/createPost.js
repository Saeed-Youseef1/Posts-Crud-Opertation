const Post = require('../models/posts');


const createPost = async (req, res) => {
    try {
        const { title, description, author } = req.body;

        if (!title || !description || !author) {
            return res.status(400).json({ message: "You Must Complete The Required Data!" });
        }

        const newPost = await Post.create({
            title,
            description,
            author,
            createdAt: new Date(), 
        });

        return res.status(201).json({
            message: "Post Added Successfully :)",
            post: newPost, 
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = createPost;