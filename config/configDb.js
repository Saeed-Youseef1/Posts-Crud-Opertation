const mongoose = require('mongoose');

const connectDatabase = async()=>{
    try {
        await mongoose.connect(process.env.DATABASEURL)
    } catch(error) {
        console.log(error);
    }
}

module.exports = connectDatabase;