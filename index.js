const express = require("express");
const app = express();
const port = 5500;
const fs = require("fs");
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback('null','./upload')
    },
    filename: function(req, file, callback){
        callback('nul',file.originalname);
    }
})

let upload = multer({storage: storage}).single('myFile');

app.post('/', (req, res)=>{
    upload(req, res, function(error){
        if(error){
            res.send('file upload fail');
        }else{
            res.send('file upload successful');
        }
    })
})


app.get('/', (req, res) => {
  res.end("This is Home Page");
});

app.get('/about', (req, res)=>{
    res.end('This is about page')
})

app.get('/contact', (req, res)=>{
    res.end('This is contact page')
})


app.get('/file-write', (req, res)=>{
    fs.writeFileSync('demo.txt', 'hello world');
    res.end('file created successfully');
})













app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
