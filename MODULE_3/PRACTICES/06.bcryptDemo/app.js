const { genSaltSync, hashSync, compareSync } = require('bcryptjs');
const saltRounds = 10;

const plainPassword1 = 'HelloWorld';
const plainPassword2 = 'helloworld';

const salt = genSaltSync(saltRounds);

console.log(`Salt => ${salt}`);

const hash1 = hashSync(plainPassword1, salt);
const hash2 = hashSync(plainPassword2, salt);

const verifyPass1 = compareSync(plainPassword1, hash1);
const verifyPass2 = compareSync('some wrong password', hash2);

console.log(`Hash 1: ${hash1}`);
console.log(`Hash 2: ${hash2}`);
console.log('----------------------------------------');
console.log(`Is plainPassword1 corresponding to the created hash1: ${verifyPass1}`);
console.log(`Is plainPassword2 corresponding to the created hash2: ${verifyPass2}`);