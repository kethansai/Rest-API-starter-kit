const express = require('express');
const app = express();
const mongoose = require('mongoose');

require('dotenv/config');

const port = process.env.PORT || 9000;

app.use(express.json());

//MongoDB connection
// mongoose.connection(process.env.DB_CONNECTION, {useNewUrlParser:true}, () => {
//     console.log('DB Connected')
// })

//Import Routes
const posts = require('./Routes/posts');
app.use('/posts', posts);


//Routes
app.get('/', (req, res) => {
    res.send("Hello world");
})

app.listen(port,()=>{
    console.log("Server is Running on Port: " + port);
    console.log("http://localhost:" + port + "/");
})