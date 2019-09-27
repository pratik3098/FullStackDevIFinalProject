let ethers = require('ethers')
/* let etherString
try {
  let provider = ethers.getDefaultProvider('rinkeby')
  let apiToken = "U2ADDD8KDD731FIGBJ4DM4SKNYWA2TKVHW"
  let privateKey = "43D57D2EEAC30F7F172042747F79830356AFDFAD43D22BEF5C1C1BA5239C9ED0"
  let wallet = new ethers.Wallet(privateKey, provider)
  let etherscanProvider = new ethers.providers.EtherscanProvider('rinkeby',apiToken)
   etherscanProvider.getBalance(wallet.address).then((balance) => {
    console.log(balance)
    etherString=ethers.utils.formatEther(balance)
    console.log("Balance: " + etherString);
    
})
  console.log("Balance: " + etherString);
  console.log(wallet.address)

 // console.log(wallet)
}
catch (err) {
  // console.log("Error Occured")
  console.log(JSON.stringify(err))
}

*/
exports.sendTranscation = function (address, amount) {
 if(amount<=balance)
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



async function createWallet() {
let ethers = require('ethers')
let etherString
try {
  let provider = ethers.getDefaultProvider('rinkeby')
  let apiToken = "U2ADDD8KDD731FIGBJ4DM4SKNYWA2TKVHW"
  let privateKey = "43D57D2EEAC30F7F172042747F79830356AFDFAD43D22BEF5C1C1BA5239C9ED0"
  let wallet = new ethers.Wallet(privateKey, provider)
  let etherscanProvider = new ethers.providers.EtherscanProvider('rinkeby',apiToken)
  const balance = ethers.utils.formatEther(await  etherscanProvider.getBalance(wallet.address))
    console.log("Balance 111: " + balance);
    console.log(wallet.signingKey.address)
}
catch (err) {
  // console.log("Error Occured")
  console.log(JSON.stringify(err))
}
 return {
    data: "Hello World!",
    name: "George Brown"
 }
}

async function test()
{

  const k = await createWallet();
  console.log(k);
}

test();
