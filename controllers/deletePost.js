const Post = require('../models/posts');


const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        await Post.findByIdAndDelete(id);
        res.json({ success: true, message: "Post deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error deleting post" });
    }
};

module.exports = deletePost;