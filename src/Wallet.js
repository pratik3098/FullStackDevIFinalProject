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
            this.providerName = 'homestead'
        this.provider = this.ethers.getDefaultProvider(this.providerName)
        this.etherscanProvider = new this.ethers.providers.EtherscanProvider(this.providerName, this.apiToken)


        if (typeof seed != "undefined" && seed != null) {
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
    createWallet() {
        if (this.privateKey) {
            try {
                this.wallet = new this.ethers.Wallet(this.privateKey, this.provider)
                this.privateKey = this.wallet.signingKey.keyPair.privateKey
            }
            catch (err) {
                this.errorFunction(err)
            }

        }
        else {
            try {
                this.wallet = this.ethers.Wallet.createRandom()
                this.privateKey = this.wallet.signingKey.keyPair.privateKey
            }
            catch (err) {
                this.errorFunction(err)
            }

        }
         console.log(this.wallet)
    }

    createWalletFromSeed(seed) {
        try {
            this.wallet = this.ethers.Wallet.fromMnemonic(seed)
            this.privateKey = this.wallet.signingKey.keyPair.privateKey
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
            //balance: this.balance,
            //provider: this.wallet.provider._network.name
        }

    }

    async getBalance() {
        return this.ethers.utils.formatEther(await this.etherscanProvider.getBalance(this.wallet.address))
    }

    changeProvider(providerName) {
        if(providerName!=this.providerName){
        if (this.providers.includes(providerName)) {
            console.log(providerName)
            this.providerName = providerName
        }
        else {
            this.providerName = 'homestead'
        }
        try {
            this.provider = this.ethers.getDefaultProvider(this.providerName)
            this.etherscanProvider = new this.ethers.providers.EtherscanProvider(this.providerName, this.apiToken)
            this.createWallet()
        }
        catch (err) {
           // this.errorFunction(err)
           err = JSON.stringify(err)
           console.log(err)
            throw err
        }
    }
    }

    errorFunction(err) {
        err = JSON.stringify(err)
        console.log(err)
        throw err
    }
}