const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const { hostname } = require('os');

const url = `mongodb+srv://PercyRiptide:percy912@cluster0.ywe16.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const connectDB = async () => {
    try{
        // mongodb connection string
        // const con = await mongoose.connect(process.env.MONGO_URL)
        // console.log(`MongoDB connected : ${con.connection.host}`);
        await mongoose.connect(url);
        console.log(`MongoDB connected: ${hostname}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}
module.exports = connectDB


// const mongoose = require('mongoose');
// const url = `mongodb+srv://PercyRiptide:percy912@cluster0.ywe16.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
// const connectDB = async () => {
//     try{
//                 // mongodb connection string
//                 // const con = await mongoose.connect(process.env.MONGO_URL)
//                 // console.log(`MongoDB connected : ${con.connection.host}`);
//                 mongoose.connect(url);
//                 console.log(`MongoDB connected: ${hostname}`);
//             }catch(err){
//         console.log(err);
//         process.exit(1);
//     }
// }

// module.exports = connectDB