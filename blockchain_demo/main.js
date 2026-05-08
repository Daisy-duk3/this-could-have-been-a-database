import CryptoJS from 'crypto-js';

// Testing package works
//const hash = CryptoJS.SHA256("hello").toString();
//
//console.log(hash);

class Block {
    constructor(index, timestamp, data, previousHash =''){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    calculateHash(){
    return CryptoJS.SHA256(this.index + this.previousHash +this.timestamp +JSON.stringify(this.data)).toString();
    }
}

class Blockchain{
    constructor(){
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock(){
        return new Block(0, "08/05/2026", "Genesis block", "0");
    }

    getLatestBlock(){
        return this.chain[this.chain.length -1];
    }

    addBlock (newBlock){
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
}

let TrustMeCoin = new Blockchain();
TrustMeCoin.addBlock(new Block(1, "09/05/2026", { amount: 4 }));
TrustMeCoin.addBlock(new Block(2, "10/05/2026", { amount: 10 }));

console.log(JSON.stringify(TrustMeCoin, null, 4))