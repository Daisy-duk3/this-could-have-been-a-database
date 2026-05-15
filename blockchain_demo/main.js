import { Blockchain, Transaction } from './blockchain.js';

const myChain = new Blockchain();

import elliptic from 'elliptic';

const EC = elliptic.ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate(''); // run key generator and make a note of both public and private keys put private here
const myWalletAddress = myKey.getPublic('hex');

let BubbaCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
BubbaCoin.addTransaction(tx1);

console.log('\nStarting the miner...');
BubbaCoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance BEFORE reward is mined: ', BubbaCoin.getBalanceOfAddress(myWalletAddress));

console.log('\nMining reward block...');
BubbaCoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance AFTER reward is mined: ', BubbaCoin.getBalanceOfAddress(myWalletAddress));

console.log('Is chain valid?', BubbaCoin.isChainValid());
