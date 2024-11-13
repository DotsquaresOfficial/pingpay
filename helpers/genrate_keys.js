const crypto=require('crypto');

const AccessTokenKey=crypto.randomBytes(32).toString('hex');
const RefreshTokenKey=crypto.randomBytes(32).toString('hex');

console.table({AccessTokenKey,RefreshTokenKey});