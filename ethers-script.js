let ethers = require('ethers');


let privateKey="489E52A1A043A2245BCA8426E36DF84DD6D5B4B4FC6D91C7268135857BA887EB";
let provider = ethers.getDefaultProvider();
let wallet=new ethers.Wallet(privateKey);
//console.log(wallet);


function showKeys(){
  //  console.log("Public key: "+wallet.signingKey.keyPair.publicKey);
   // console.log("Private key: "+wallet.signingKey.keyPair.privateKey);
    document.getElementById("public-key").innerHTML=response.name;
    document.getElementById("private-key").innerHTML=response.balance;
}

