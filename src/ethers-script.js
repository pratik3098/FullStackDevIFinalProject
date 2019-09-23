//let ethers = require('ethers');
let privateKey;
let publicKey;
//let provider = ethers.getDefaultProvider();
//let wallet=new ethers.Wallet(privateKey,provider);
//console.log(wallet);


function showKeys(){
  //  console.log("Public key: "+wallet.signingKey.keyPair.publicKey);
   // console.log("Private key: "+wallet.signingKey.keyPair.privateKey);
}


function fetchKeys(){
    //publicKey=document.getElementById("publicKey").value;
    //privateKey=document.getElementById("privateKey").value;
    
    console.log("Public key: "+publicKey);
    console.log("Private key: "+privateKey);
    
}

fetchKeys();
