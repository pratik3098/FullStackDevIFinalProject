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
let mydata = {alert1: 'hidden', data: ''}

//mywallet =new Wallet('43D57D2EEAC30F7F172042747F79830356AFDFAD43D22BEF5C1C1BA5239C9ED0','rinkeby')
app.use(bodyParser.urlencoded({extended: false}))
app.get('',(req,res)=>{
    //res.sendFile("index.html",{root: __dirname})
    res.render("index",mydata)
})
app.get('/mywallet',(req,res)=>{
    if(mydata==={alert1: 'hidden', data: ''})
    res.redirect('')

    res.render('wallet',mydata)
})
app.post('/submit',(req, res)=>{
     try{
     if(req.body.seed.length>0)
     mywallet =new Wallet(req.body.privateKey,req.body.provider,req.body.seed)
     //else if(req.body.privateKey.length!=64)
       //     throw "Error: Invalid privateKey"
     //  console.log("hello")
     else
      // mywallet = new Wallet(req.body.privateKey, req.body.provider)
      console.log("hello")
     }
     catch(err){
         mydata= {alert1: ' '}
         console.log(err) 
         res.redirect('/')
     }
     mydata=mywallet.getData()
     console.log(mydata)
    // res.render('index', mywallet.getData())

})
app.post('/changeProvider',(req,res)=>{
    console.log(JSON.stringify(req.body))
    try{
        mywallet.changeProvider(req.body.provider)
        mydata= mywallet.getData()
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


