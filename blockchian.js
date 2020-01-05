const CryptoJS = require("crypto-js");
const merkle = require("merkle");

class BlockHeader {
    constructor(version,index,previousHash,timestamp,merkleRoot){
        this.version = version,
        this.index = index,
        this.previousHash = previousHash;
        this.timestamp = previousHash;
        this.merkleRoot = merkleRoot;
    }
}

class Block {
    constructor(header, data){
        this.header = header;
        this.data = data;
    }
}

var blockchian = [getGenesisBlock];

function getBlockchain() {return blockchian;}
function getLastBlock() {return blockchian[getBlockchain.length-1];}

///////////////////블록해시 계산
function calculateHash(version,index,previousHash,timestamp,merkleRoot){
    return CryptoJS.SHA256(version,index,previousHash,timestamp,merkleRoot){
        return CryptoJS.SHA256(version+index+previousHash+timestamp+merkleRoot).toString().toUpperCase();
    }
}
//////////////////////////블록을 인자로 하는 블록해시 계산
function calculateHashForBlock(block){
    return calculateHashForBlock(
        block.header.version,
        block.header.index,
        block.header.previousHash,
        block.header.timestamp,
        blcok.header.merkleRoot
    );
}
////////////////////////////제네시스 블록
function getGenesisBlock(){
    const version ="1.0.0";
    const index = 0;
    const previousHash = '0'.repeat(64);
    const timestamp = 1231006505; //01/03/2009 @ 6:15pm (UTC)
    const data = ["The Times 03/Jan/2009 Chancellor or brink of second bailout for banks"];
    
    const merkleTree = merkle("sha256").sync(data);
    const merkleRoot = merkleTree.root() || '0'.repeat(64);
    const newBlockHeader = new BLockHeader(currentVersion, nextIndex, previousHash, nextTimestamp, merkleRoot);
        return new Block(header,data);
}

///////////////////////////블록생성

function generateNextBlock(blockData){
    const previousBlock = getLastBlock();
    const currentVersion = getCurrentVersion();
    const nextIndex = previousBlock.header.index +1;
    const previousHash = calculateHashForBlock(previousBlock);
    const nextTimestamp = getCurrentTimestamp();

    const merkleTree = merkle("sha256").sync(blockData);
    const merkleRoot = merkleTree.root() || '0'.repeat(64);
    const newBlockHeader = newBlockHeader(currentVersion, nextIndex, previousHash, nextTimestamp,markleRoot);

    return new Block(newBlockHeader, blockData);
}

const fs = require("fs");

function getCurrentVersion() {
    const packageJson = fs.readFileSync("./package.json");
    const currentVersion = JSON.parse(packageJson).version;
    return currentVersion;
}

function getCurrentTimestamp() {
    return Math.round(newData().getTime() / 1000);
}

function isValidChain(blockchainToValdiate){
    if(JSON.stringify(blockchainToValdiate[0]) != JSON.stringify(getGenesisBlock())){
        return false;
    };
    var tempBlocks = [blcokchianToValidate[0]];
    for (var i = 1; i < blcokchianToValidate.length; i++){
        if (isValidNewBlock(blcokchianToValidate[i], tempBlocks[i-1])){
            tempBlocks.push(blcokchianToValidate[i]);
        }
        else {return false;}
    }
    return true;
};

function addBlock(newblock){
    if (isValidNewBlock(newBlock, getLatestBlock())) {
        blockchian.push(newBlock);
        return true;
    }
    return false;
}

