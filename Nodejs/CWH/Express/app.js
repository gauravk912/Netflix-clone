const express = require("express");
const path = require('path');
const app = express();
const port = 80;

app.use('/static',express.static('static'));//for serving static files

app.set('view engine ','pug');//set templete engine as pug
app.set('views',path.join(__dirname,'views'));//set the view dicrectory

app.get('/',(req,res)=>{
    res.status(200).render('index.pug');
});

app.listen(port,()=>{
    console.log(`The application Started successfuly at port ${port}`)
});
// app.get("/home",(req,res)=>{
//     res.send("This is get home my first express app")
// });
// app.get("/about",(req,res)=>{
//     res.send("This is get about my first express app")
// });
// app.post("/about",(req,res)=>{
//     res.send("This is post about my first express app")
// });
// app.get("/contact",(req,res)=>{
//     res.send("This is get contact my first express app")
// });
