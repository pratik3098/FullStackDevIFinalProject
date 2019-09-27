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
let w1
//let w1 =new Wallet('43D57D2EEAC30F7F172042747F79830356AFDFAD43D22BEF5C1C1BA5239C9ED0','rinkeby')
if(walletCreated(null,"good flame job limit orphan hammer human tourist person arrest clog tide",null))
console.log("Cool!")
//w1.createWalletFromSeed("good flame job limit orphan hammer human tourist person arrest clog tide")
console.log(w1.getData())
app.use(bodyParser.urlencoded({extended: false}))
app.get('',(req,res)=>{
    //res.sendFile("index.html",{root: __dirname})
    res.render("index",{bool: "hidden", data: ""})
})

app.post('/submit',(req, res)=>{
     console.log(JSON.stringify(req.body))
     if(req.body.publickey && req.body.seed)
    /* try{
     let w1 =new Wallet(req.body.uname,req.body.psw)
     }
     catch(err){

     } */
     res.redirect("/mywallet")

})
app.get('/alert',(req,res)=>{
    res.render('alert')
})
app.listen(8080,()=>{
    console.log("Server is running on port: 8080")
})

function walletCreated(key,seed,provider){
     if(key!=null && key.length==42){
         try{
            w1 = new Wallet(key,provider)
         }
         catch(err){
               return false
         }
         return true
     }
    else if(seed){
         try{
             w1 = new Wallet(null,provider)
             w1.createWalletFromSeed(seed)
         }
         catch(err){
            return false
         }
         return true
    }
    else 
    return false
}


