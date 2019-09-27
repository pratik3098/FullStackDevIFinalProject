let ethers = require('ethers')
let provider = ethers.getDefaultProvider()

let privateKey = "0x3141592653589793238462643383279502884197169399375105820974944592"
let wallet = new ethers.Wallet(privateKey, provider)
let balance1
wallet.getBalance().then((balance) => {
   
   console.log(ethers.utils.formatEther(balance))
})


console.log("Balance: "+ balance1)

let transactionCountPromise = wallet.getTransactionCount()

transactionCountPromise.then((transactionCount) => {
    console.log(transactionCount);
});