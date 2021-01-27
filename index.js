import express from "express";

var app = express();

const handleListen = ()=>{
    console.log(`listening -- on : localhost:4000`);
}

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('Git test');
});

app.listen(4000, handleListen);