const Post = require('../models/posts');


const getPost = async (req, res) => {
    try {
        const posts = await Post.find({});
        let post = posts.filter((p) => p._id.equals(req.params.id));
        
        if (!post) {
            return res.status(404).json({ message: "No Post Found!" });
        }
        
        res.render('postDetails', {post})

    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
};


module.exports = getPost;