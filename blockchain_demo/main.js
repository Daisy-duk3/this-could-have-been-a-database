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

    isChainValid(){
        for(let i = 1; i < this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if(currentBlock.hash !== currentBlock.calculateHash()){
                return false;
            }

            if(currentBlock.previousHash !== previousBlock.hash){
                return false;
            }
        }

        return true;
    }
}

let BubbaCoin = new Blockchain();
BubbaCoin.addBlock(new Block(1, "09/05/2026", { amount: 4 }));
BubbaCoin.addBlock(new Block(2, "10/05/2026", { amount: 10 }));

console.log('Is blockchain valid? ' + BubbaCoin.isChainValid());

BubbaCoin.chain[1].data = { amount: 100};
BubbaCoin.chain[1].hash = BubbaCoin.chain[1].calculateHash();
console.log('Is blockchain valid? ' + BubbaCoin.isChainValid());


//console.log(JSON.stringify(BubbaCoin, null, 4))