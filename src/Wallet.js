'use strict'
module.exports = class Wallet {
    constructor(privateKey, providerName) {
        this.ethers = require('ethers')
        this.apiToken = "U2ADDD8KDD731FIGBJ4DM4SKNYWA2TKVHW"
        if (!providerName)
            this.providerName = 'homestead'

        this.provider = this.ethers.getDefaultProvider(this.providerName)
        this.etherscanProvider = new this.ethers.providers.EtherscanProvider(this.providerName, this.apiToken)
        this.privateKey = privateKey
    }
    createWallet() {
        if (this.privateKey) {
            try {
                this.wallet = new this.ethers.Wallet(this.privateKey, this.provider)
            }
            catch (err) {
                err = JSON.stringify(err)
                console.log(err)
                throw err
            }

        }
        else {
            try {
                this.wallet = this.ethers.Wallet.createRandom()
                this.privateKey = this.wallet.signingKey.keyPair.privateKey
            }
            catch (err) {
                err = JSON.stringify(err)
                console.log(err)
                throw err
            }

        }
    }

    createWalletFromSeed(seed) {
        try {
            this.wallet =  this.ethers.Wallet.fromMnemonic(seed)
        }
        catch (err) {
            err = JSON.stringify(err)
            console.log(err)
            throw err
        }
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
}