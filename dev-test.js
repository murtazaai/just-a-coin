const Block = require('./blockchain/block')

const block = new Block('timestamp', 'lastHash', 'hash', 'data');
console.log(block.toString())

console.log(Block.genesis().toString());

const mineBlock = Block.mineBlock(Block.genesis(), 'data')
console.log(mineBlock.toString())