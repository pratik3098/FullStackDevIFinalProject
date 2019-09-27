'use strict'

module.exports =class Wallet{
    constructor(privateKey,providerName){
        this.ethers = require('ethers')
        this.apiToken = "U2ADDD8KDD731FIGBJ4DM4SKNYWA2TKVHW"
        this.privateKey = privateKey
        this.providerName= providerName
        this.provider
        this.wallet
        this.etherscanProvider
        this.data
        try{
        this.provider = ethers.getDefaultProvider(this.providerName)
        this.etherscanProvider = new ethers.providers.EtherscanProvider(this.providerName,this.apiToken)
        this.wallet = new ethers.Wallet(this.privateKey, this.provider)
        this.data = {
            address: this.wallet.signingKey.address,
            privateKey: this.wallet.signingKey.keyPair.privateKey,
            publicKey: this.wallet.signingKey.keyPair.compressedPublicKey,
            balance: this.balance(),
            provider: this.wallet.provider._network.name
       }
        }
        catch(err){
            console.log(JSON.stringify(err))
        }
        
    }
    createWallet(privateKey,providerName){
        try{
            this.provider = ethers.getDefaultProvider(this.providerName)
            this.etherscanProvider = new ethers.providers.EtherscanProvider(this.providerName,this.apiToken)
            this.wallet = new ethers.Wallet(privateKey, provider)
            this.data = {
                 address: this.wallet.address,
                 privateKey: this.wallet.signingKey.keyPair.privateKey,
                 publicKey: this.wallet.signingKey.keyPair.compressedPublicKey,
                 //balance: this.balance(),
                 provider: this.wallet.provider._network.name
            }
      }
      catch(err){
          console.log(JSON.stringify(err))
      }
    }
    get data(){
       return JSON.parse(this.data)
    }
  //  async balance(){
   //     return this.ethers.utils.formatEther(await this.etherscanProvider.getBalance(this.wallet.address))
    //}
}