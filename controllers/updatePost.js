const Post = require("../models/posts");

const updatePost = async (req, res) => {
    try {
        const id = req.params.id;
        const post = await Post.findById({id}); 
        console.log(post);
        if (!post) {
            return res.status(404).json({ message: "No Post Found!" });
        }

        const updatedPost = {
            title: req.body.title ,
            description: req.body.description,
        };

        const result = await Post.findByIdAndUpdate(id, updatedPost, { new: true });

        res.status(200).json({ message: "Post Updated Successfully", post: result });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = updatePost;
