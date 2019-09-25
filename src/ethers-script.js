let ethers = require('ethers');

console.log(wallet);

console.log(balance);

function showKeys(){
  //  console.log("Public key: ");
   // console.log("Private key: "+wallet.signingKey.keyPair.privateKey);
}

function createWallet(publicKey,privateKey){
  let key;
  if(privateKey)
   key=privateKey
  else if(publicKey)
   key=publicKey
  mywallet={
     "publicKey": wallet.signingKey.keyPair.publicKey,
     "privateKey": wallet.signingKey.keyPair.privateKey,
     "balance": ethers.utils.formatEther(balanceprovider.getBalance(key));
  }
}



