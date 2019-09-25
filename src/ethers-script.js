let ethers = require('ethers');
try{
  /*let privateKey = "0x0123456789012345678901234567890123456789012345678901234567890123"
  let provider = ethers.getDefaultProvider('rinkeby')
  let wallet = new ethers.Wallet(privateKey provider) */
  let randomWallet = ethers.Wallet.createRandom()
  console.log(randomWallet)
 }
 catch(err){
   console.log(err)
 }

function createWallet(privateKey,provider){
   try{
    let privateKey = "0x0123456789012345678901234567890123456789012345678901234567890123"
    let provider = ethers.getDefaultProvider('rinkeby')
    let wallet = new ethers.Wallet("blah ", provider)
   }
   catch(err){
     console.log(err)
   }
  mywallet={
     "publicKey": wallet.signingKey.keyPair.publicKey,
     "privateKey": wallet.signingKey.keyPair.privateKey,
     "balance": ethers.utils.formatEther(balanceprovider.getBalance(key)),
     "network": provider,
  }
}



