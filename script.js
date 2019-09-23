const path=require('path');
const fs=require('fs');
const express= require('express');
const app = express();
app.set('title','Ether Wallet');

app.get('',(req,res)=>{
   res.sendfile("./index3.html");
})

app.listen(8080,()=>{
    console.log("Server running on port: 8080");
})
