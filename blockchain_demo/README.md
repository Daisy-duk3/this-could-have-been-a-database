# 🧱 Blockchain — Dev Diary

A lightweight personal blockchain built in Node.js using `crypto-js`.  
This project documents my learning progress while building a basic blockchain from scratch, including classes, hashing logic, and debugging issues.

---

<details>
<summary><strong>📅 08/05/2026 — Day 1: Core Blockchain Structure + Hashing</strong></summary>

## 🧠 What I Built Today

### 🔹 `Block` Class
Represents a single block in the chain.

**Purpose:**
- Stores transaction data
- Links to the previous block via `previousHash`
- Generates its own cryptographic hash

**Key function:**
- `calculateHash()` → creates a SHA256 hash of block contents to ensure immutability

---

### 🔹 `Blockchain` Class
Manages the full chain of blocks.

**Purpose:**
- Initializes the chain with a genesis block
- Adds new blocks securely
- Ensures each block is linked via hashes

**Key functions:**
- `createGenesisBlock()` → creates the first block in the chain
- `getLatestBlock()` → retrieves the most recent block
- `addBlock()` → assigns `previousHash`, recalculates hash, and appends the block

---

### 🔐 Hashing
Used `crypto-js`:

```js
import CryptoJS from 'crypto-js';