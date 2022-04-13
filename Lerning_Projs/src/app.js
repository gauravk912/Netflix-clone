const express = require('express');
const path = require('path');
const app = express();

const static_path = path.join(__dirname,'public');
app.use(express.static(static_path));
console.log(static_path);
require("./db/conn");

app.get("/", (req,res)=>{
    // res.send("Hello user");
    res.render('index');
});

app.listen(port,()=>{
    console.log(`The port is running successfully on port ${port}`);
})