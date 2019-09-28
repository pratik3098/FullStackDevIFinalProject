const path=require('path')
const Wallet= require('./Wallet')
const ethers = require('ethers')
const axios = require('axios')
const fs=require('fs')
const request = require('request')
const express= require('express')
const bodyParser= require('body-parser');
const app = express()
app.set('title','Ether Wallet')
app.set('view engine','hbs')
app.set('views',path.join(__dirname,"../views"))
app.use(express.static("../views"))
app.use(bodyParser.urlencoded({extended: false}))
let mywallet
let mydata = {alert1: 'hidden', data: ''}
let add = '0x2e3AEa4b4EC043c60bA45E43b40046A3cFbc0d27'
let price
console.log("result:" +isValidKey('43D57D2EEAC30F7F172042747F79830356AFDFAD43D22BEF5C1C1BA5239C9ED0'))

//
mywallet =new Wallet('43D57D2EEAC30F7F172042747F79830356AFDFAD43D22BEF5C1C1BA5239C9ED0','rinkeby')
console.log("Price: "+ renderWalletData())
/*app.get('',(req,res)=>{
    //res.sendFile("index.html",{root: __dirname})
    res.render('index',mydata)
    getEtherPrice()
    console.log("Price: "+ price)
    let wall = renderWalletData()
    
})

app.get('/mywallet',(req,res)=>{
    if(mydata==={alert1: 'hidden', data: ''})
    res.redirect('')

  
    res.render('wallet',mydata)
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
    let wall =renderWalletData()
     
     
     res.render('wallet', wall)

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
*/

function renderWalletData(){
    let d = mywallet.getData()
     mywallet.balance().then((res)=>{
        try{
        d= {...d, "balance": res}
        console.log(d)
      
       }
       catch(err){
           console.log(JSON.stringify(err))
       }
      
   })
   return d;
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

function getEtherPrice(){
   /* let d
    axios.get('https://api.etherscan.io/api?module=account&action=balance&address=0x2e3AEa4b4EC043c60bA45E43b40046A3cFbc0d27&tag=latest').then((res)=>{
       d=res.data.result
       setTimeout(()=>{setData(add)},1000)})
       .catch((err)=>{
        console.log(err)})
   */
   request.get('https://api.etherscan.io/api?module=account&action=balance&address=0x2e3AEa4b4EC043c60bA45E43b40046A3cFbc0d27&tag=latest',{json: true},(err,res,body)=>{
       console.log("Hi:"+body.result)
       price = body.result
   })
   return price
}

function setData(data){
   price = data
   console.log("Price2: "+price)
}


