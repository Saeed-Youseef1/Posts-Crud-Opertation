const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const path = require('path')

const postsRouter = require('./routes/postsRoutes');
const connectDatabase = require('./config/configDb');

connectDatabase();


const app = express();
app.use(express.json());


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
app.use(express.static(path.join(__dirname, "public")));

const {renderPosts,renderPost,createPost} = require("./public/index");
app.locals.renderPosts = renderPosts;
app.locals.renderPost = renderPost;
app.locals.createPost = createPost;


app.use('/',postsRouter);


mongoose.connection.once('open',()=> {
    console.log('Database Is Connecting.....');
    app.listen(process.env.PORT,()=> {
        console.log('Server Is Running.....');
    })
})

mongoose.connection.on('error',()=> {
    console.log('Database Connection Is Failing.....');
})



