const path=require('path');
const fs=require('fs');
const express= require('express');
const app = express();

app.set('title','Ether Wallet');
app.set('view engine','hbs');
app.set('views',path.join(__dirname,"../views"));
//app.use(express.static("./"); 
let username;
let password;
app.get('',(req,res)=>{
    res.render("index");
    username=req.query.username;
    password=req.query.password;
    console.log("Username: "+username);
    console.log("Password: "+password);
})


app.get('/signup',(req, res)=>{
   res.sendfile("./signup.html");
 });


app.listen(8080,()=>{
    console.log("Server is running on port: 8080");
})
console.log(__dirname);

function jsonReader(filePath, cb) {
    fs.readFile(filePath, (err, fileData) => {
        if (err) {
            return cb && cb(err)
        }
        try {
            let object = JSON.parse(fileData);
            return cb && cb(null, object);
        } catch(err) {
            return cb && cb(err);
        }
    })
}
let user1;
jsonReader('./database.json', (err, user) => {
    if (err) {
        console.log(err);
        return;
    }
    user.forEach(element => {
        //console.log(element); 
        if(element.name=="Pratik")
         user1=element;
    });    
})
console.log(user1);
app.get('/mywallet',(req,res)=>{
    res.render("mywallet",{
        name: user1.name,
        privateKey: user1.privateKey
    });
})

function login(){
    
    username=sign.getElementById("username").value;
    password=sign.getElementById("password").value;
    console.log("Username: "+ username);
}
