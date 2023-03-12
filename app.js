const express = require("express");
const app=express();
const mongoose= require("mongoose");

let port = process.env.PORT || 3000;


mongoose.connect('mongodb://0.0.0.0:27017/todolist',{
    useNewUrlParser:true,
    useUnifiedTopology:true
    //useCreateIndex:true
})
.then(()=>{
    console.log('connect');
})
.catch((error)=>{
    console.log(error);
})

app.use(express.urlencoded({extended:true}));
app.use(express.static("public"))
app.set("view engine","ejs");

app.use(require("./routes/index"));

app.listen(port,()=>{
    console.log(`listen to the ${port}`);
})