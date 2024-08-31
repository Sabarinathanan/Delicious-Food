const express = require('express')
const cors = require('cors');
const mongoose =require('mongoose')
const foodRouter=require('./routes/foodRouter.js')
const userRouter = require('./routes/userRouter.js')

//app config
const app =express();
const port = 3434;

//middleware
app.use(express.json())
app.use(cors())

//db
mongoose.connect('mongodb+srv://sabariraj773:Sabari%402002@cluster0.h647i.mongodb.net/food-delicious')
.then(()=>console.log('DB connected'))

//api endpoint
app.use('/api/food',foodRouter) 
app.use('/images',express.static('uploads')) //to access a images in browser

//port
app.listen(port,()=>{
    console.log(`server is running ${port}`)
})