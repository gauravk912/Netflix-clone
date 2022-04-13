const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
const app = express();
const controller = require('./server/controller/controller');
const router = require('./server/routes/router')
const connectDB = require('./server/database/connection');

dotenv.config({path:"config.env"});
const PORT= process.env.PORT || 8080;

app.use(morgan('tiny'));//log request

// mongodb connection
connectDB();

app.use(bodyparser.urlencoded({extended:true}));//parse req to bady-parser
app.set('view engine','ejs');
// app.set('views',path.resolve(__dirname,"views/ejs"));

// load public 
app.use('/css',express.static(path.resolve(__dirname,'public/css')));
app.use('/img',express.static(path.resolve(__dirname,'public/img')));
app.use('/js',express.static(path.resolve(__dirname,'public/js')));

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/add_user',(req,res)=>{
    res.render('add_user', {});
})
app.get('/update_user',(req,res)=>{
    res.render('update_user');
})

// app.use('/',require("./server/routes/router"))

app.post('/api/users', controller.create);
// app.get('/api/users', controller.find);
// app.put('/api/users/:id', controller.update);
// app.delete('/api/users/:id', controller.delete);

app.listen(PORT,()=>{
    console.log(`The port is running successfully on port ${PORT}`);
})




// const express = require('express');
// const dotenv = require('dotenv');
// const morgan = require('morgan');
// const bodyparser = require("body-parser");
// const path = require('path');

// const connectDB = require('./server/database/connection');

// const app = express();

// dotenv.config( { path : 'config.env'} )
// const PORT = process.env.PORT || 8080

// // log requests
// app.use(morgan('tiny'));

// // mongodb connection
// connectDB();

// // parse request to body-parser
// app.use(bodyparser.urlencoded({ extended : true}))

// // set view engine
// app.set("view engine", "ejs")
// //app.set("views", path.resolve(__dirname, "views/ejs"))

// // load assets
// app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
// app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
// app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

// // load routers
// app.use('/', require('./server/routes/router'))

// app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});