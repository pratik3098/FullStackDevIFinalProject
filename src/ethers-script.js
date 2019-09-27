let ethers = require('ethers')
let etherString
try {
  let provider = ethers.getDefaultProvider('rinkeby')
  let apiToken = "U2ADDD8KDD731FIGBJ4DM4SKNYWA2TKVHW"
  let privateKey = "43D57D2EEAC30F7F172042747F79830356AFDFAD43D22BEF5C1C1BA5239C9ED0"
  let wallet = new ethers.Wallet(privateKey, provider)
  let etherscanProvider = new ethers.providers.EtherscanProvider('rinkeby',apiToken)
   etherscanProvider.getBalance(wallet.address).then((balance) => {

    etherString = ethers.utils.formatEther(balance)

})
 // console.log("Balance: " + etherString);
  console.log(wallet.address)

 // console.log(wallet)
}
catch (err) {
  // console.log("Error Occured")
  console.log(JSON.stringify(err))
}


function sendTranscation(address, amount) {
  amount = ethers.utils.parseEther(amount)
  let tx = {
    to: address,
    value: amount
  }
   let sendPromise = wallet.sendTransaction(tx)
  sendPromise.then((tx) => {
    console.log(tx)
  })
}



function createWallet(publicKey, privateKey) {
  let key;
  if (privateKey)
    key = privateKey
  else if (publicKey)
    key = publicKey
  mywallet = {
    "publicKey": wallet.signingKey.keyPair.publicKey,
    "privateKey": wallet.signingKey.keyPair.privateKey,
    "balance": " "


  }
}
