const getHome = async (req, res) => {
    try {
        res.render('home.ejs');
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
};


module.exports = getHome;