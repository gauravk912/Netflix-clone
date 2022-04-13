const fs = require('fs');
const textIn = fs.readFileSync('./1-node-farm/starter/txt/input.txt','utf-8');
console.log(textIn);

const textOut = `\nThis is what we know about avacado:- ${textIn}.\nCreated on ${Date.now()}`;
console.log(textOut);
fs.writeFileSync('./1-node-farm/starter/txt/output.txt',textOut);console.log('File Written!');

fs.readFileSync('./1-node-farm/starter/txt/start.txt','utf-8',(err,data)=>{
    console.log(data);
});
