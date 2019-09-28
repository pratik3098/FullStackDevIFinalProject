'use strict'

module.exports = class Wallet {
    constructor(privateKey, providerName, seed) {
        this.providers = ['homestead', 'rinkeby', 'ropsten', 'kovan', 'goerli']
        this.ethers = require('ethers')
        this.apiToken = "U2ADDD8KDD731FIGBJ4DM4SKNYWA2TKVHW"
        this.privateKey = privateKey
        if (this.providers.includes(providerName))
            this.providerName = providerName
        else
            this.providerName = 'rinkeby'
        this.provider = this.ethers.getDefaultProvider(this.providerName)
        this.etherscanProvider = new this.ethers.providers.EtherscanProvider(this.providerName, this.apiToken)


        if (typeof seed != "undefined" && seed != null && seed.length > 0) {
            try {
                this.createWalletFromSeed(seed)
            }
            catch (err) {
                try {

                    this.createWallet()
                }
                catch (err) {
                    this.errorFunction(err)
                }
            }
        }
        else {
            try {

                this.createWallet()
            }
            catch (err) {
                this.errorFunction(err)
            }
        }
    }
    get address(){
        return this.wallet.signingKey.address
    }
    async createWallet() {
        if (this.privateKey) {
            try {
                this.wallet = new this.ethers.Wallet(this.privateKey, this.provider)
                this.privateKey = this.wallet.signingKey.keyPair.privateKey
              // console.log(this.wallet)
            }
            catch (err) {
                this.errorFunction(err)
            }

        }
        else {
            try {
                this.wallet = this.ethers.Wallet.createRandom()
                this.privateKey = this.wallet.signingKey.keyPair.privateKey
                this.createWallet()
            }
            catch (err) {
                this.errorFunction(err)
            }

        }
    }

    createWalletFromSeed(seed) {
        try {
            this.wallet = this.ethers.Wallet.fromMnemonic(seed)
            this.privateKey = this.wallet.signingKey.keyPair.privateKey
            this.createWallet()
        }
        catch (err) {
            this.errorFunction(err)
        }
        console.log(this.wallet)
    }

    getData() {
           return {
                address: this.wallet.signingKey.address,
                privateKey: this.wallet.signingKey.keyPair.privateKey,
                publicKey: this.wallet.signingKey.keyPair.compressedPublicKey,
                provider: this.wallet.provider._network.name,
             } 
                                     
    }
 
    async balance() {
        let bal = await this.provider.getBalance(this.wallet.address)
        bal = this.ethers.utils.formatEther(bal)
        return bal
        
    }

    changeProvider(providerName) {
        if(providerName!=this.providerName){
        if (this.providers.includes(providerName)) {
            console.log(providerName)
            this.providerName = providerName
        }
        else {
            this.providerName = 'rinkeby'
        }
        try {
            this.provider = this.ethers.getDefaultProvider(this.providerName)
            this.etherscanProvider = new this.ethers.providers.EtherscanProvider(this.providerName, this.apiToken)
            this.createWallet()
        }
        catch (err) {
           this.errorFunction(err)
        }
    }
    }

    errorFunction(err) {
        err = JSON.stringify(err)
        console.log(err)
        throw err
    }
}