const path=require('path')
const fs=require('fs')
const express= require('express')
const bodyParser= require('body-parser');
const app = express()
app.set('title','Ether Wallet')
app.set('view engine','hbs')
app.set('views',path.join(__dirname,"../views"));
app.use(express.static("../views")); 
app.use(bodyParser.urlencoded({extended: false}));
app.get('',(req,res)=>{
    //res.sendFile("index.html",{root: __dirname});
    res.render("index",{bool: "hidden"});
})

app.post('/submit',(req, res)=>{
     console.log(JSON.stringify(req.body))
     if(validateKeys(req.body.publicKey,req.body.privateKey))
     res.redirect("/mywallet")
     else
     res.render('index',{bool: " "})

})
app.get('/alert',(req,res)=>{
    res.render('alert')
})
app.listen(8080,()=>{
    console.log("Server is running on port: 8080")
})




