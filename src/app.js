const path=require('path')
const Wallet= require('./Wallet')
const fs=require('fs')
const express= require('express')
const bodyParser= require('body-parser');
const app = express()
app.set('title','Ether Wallet')
app.set('view engine','hbs')
app.set('views',path.join(__dirname,"../views"))
app.use(express.static("../views"))
let w1 =new Wallet('43D57D2EEAC30F7F172042747F79830356AFDFAD43D22BEF5C1C1BA5239C9ED0','rinkeby')
console.log(w1.data)
app.use(bodyParser.urlencoded({extended: false}))
app.get('',(req,res)=>{
    //res.sendFile("index.html",{root: __dirname})
    ethersj.createWallet()
    res.render("index",{bool: "hidden", data: "<h1> Hello World!</h1>"})
})

app.post('/submit',(req, res)=>{
     console.log(JSON.stringify(req.body))
     res.redirect("/mywallet")

})
app.get('/alert',(req,res)=>{
    res.render('alert')
})
app.listen(8080,()=>{
    console.log("Server is running on port: 8080")
})




