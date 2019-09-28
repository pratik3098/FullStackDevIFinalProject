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
let mywallet
//w1 =new Wallet()
//mywallet =new Wallet('43D57D2EEAC30F7F172042747F79830356AFDFAD43D22BEF5C1C1BA5239C9ED0','rinkeby')
app.use(bodyParser.urlencoded({extended: false}))
app.get('',(req,res)=>{
    //res.sendFile("index.html",{root: __dirname})
    res.render("index",{bool: "hidden", data: ""})
})

app.post('/submit',(req, res)=>{
     console.log(req.body.privateKey.length)
     if(req.body.privateKey.length==42)
       mywallet =new Wallet(req.body.privateKey,req.body.provider)
     else if(req.body.seed.length>0)
       mywallet = new Wallet(req.body.privateKey,req.body.provider,req.body.seed)
     res.redirect('/')

})
app.post('/changeProvider',(req,res)=>{
    console.log(JSON.stringify(req.body))
    try{
        mywallet.changeProvider(req.body.provider)
        res.redirect('/mywallet')
    }
    catch(err){
        res.redirect('')
    }
})

app.get('/alert',(req,res)=>{
    res.render('alert')
})
app.listen(8080,()=>{
    console.log("Server is running on port: 8080")
})


