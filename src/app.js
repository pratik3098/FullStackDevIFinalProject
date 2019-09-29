const path=require('path')
const Wallet= require('./Wallet')
const ethers = require('ethers')
const axios = require('axios')
const fs = require('fs')
const express= require('express')
const bodyParser= require('body-parser');
const app = express()
app.set('title','Ether Wallet')
app.set('view engine','hbs')
app.set('views',path.join(__dirname,"../views"))
app.use(express.static("../views"))
app.use(bodyParser.urlencoded({extended: false}))
let mywallet
//let add = '0x2e3AEa4b4EC043c60bA45E43b40046A3cFbc0d27'
console.log("result:" +isValidKey('43D57D2EEAC30F7F172042747F79830356AFDFAD43D22BEF5C1C1BA5239C9ED0'))

app.get('',(req,res)=>{
    //res.sendFile("index.html",{root: __dirname})
    res.render('index')    
})


app.post('/submit',(req, res)=>{
     try{
        if(isValidKey(req.body.privateKey))
          mywallet= new Wallet(req.body.privateKey,req.body.provider)
     else if(req.body.seed.length>0)
          mywallet =new Wallet(req.body.privateKey,req.body.provider,req.body.seed)
     else
          throw "Invalid key"
     }
     catch(err){ 
         mydata={alert1: ' ', data: ''}
         res.redirect('/')
     }
    res.redirect('/mywallet')

})
app.get('/mywallet',(req,res)=>{
    if(typeof mywallet == "undefined")
      res.redirect('/')
    else
    renderWalletData(res)
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

function renderWalletData(response){
    let d = mywallet.getData()
     Promise.all([mywallet.balance(),axios.get('https://api.etherscan.io/api?module=stats&action=ethprice&apikey')]).then((res)=>{
        try{
        d= {...d, "balance": res[0],"usdPrice": res[1].data.result.ethusd,"btcPrice": res[1].data.result.ethbtc,"usdVal": Number(res[1].data.result.ethusd)*Number(res[0]), "btcVal": Number(res[1].data.result.ethbtc)*Number(res[0])}
        d=JSON.stringify(d)
        d=JSON.parse(d)
        //console.log(d) 
        response.render("wallet",d)  
       }
       catch(err){
           console.log(JSON.stringify(err))
       }
      
   })
}

function isValidKey(key){ 
    if(key[0]!=0 && key[1]!='x')
    key= "0x" + key
    let add
    try{
    add = ethers.utils.computeAddress(ethers.utils.hexlify(key))
    console.log("address:" +  add)
    if(add.length==42)
     return true
    }
    catch(err){
        console.log(err)
    }
    return false
}

