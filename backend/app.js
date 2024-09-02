const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require("dotenv").config()

//middleware
const corsOptions = {
    origin: 'http://localhost:3000',
    // credentials: true,
}
app.use(express.json());
app.use(cors(corsOptions));

//connect to MongoDB
mongoose.connect(process.env.MONGODB_URI).then(() =>{
    const PORT = process.env.MONGODB_PORT ||8000
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err =>{
    console.log(err);
});

//route
app.get("/", (req, res) =>{
    res.status(201).json({message:"Connected to backend"});
});