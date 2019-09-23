const path=require('path');
const fs=require('fs');
const bodyParser= require('body-parser');
const express= require('express');
const app = express();

app.set('title','Ether Wallet');
app.set('view engine','hbs');
app.set('views',path.join(__dirname,"../views"));
//app.use(express.static("./"); 
app.use(bodyParser.urlencoded({extended: false}));
app.get('',(req,res)=>{
    //res.sendFile("index.html",{root: __dirname});
    res.render("index",{data: " "});
})
app.post('/submit',function(req,res){
    console.log(req.body);
     res.render('index',{data: "Hello World;"})
});

app.listen(8080,()=>{
    console.log("Server is running on port: 8080");
})

