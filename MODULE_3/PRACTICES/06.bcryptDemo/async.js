const { genSalt, hash, compare } = require('bcryptjs');
const saltRounds = 10;

const plainPassword1 = 'HelloWorld';
const plainPassword2 = 'helloworld';

(async () => {
    try {
        const salt = await genSalt(saltRounds);
        console.log(`Salt => ${salt}`);

        const hash1 = await hash(plainPassword1, salt);
        console.log(`Hash 1: ${hash1}`);

        const hash2 = await hash(plainPassword2, salt);
        console.log(`Hash 2: ${hash2}`);

        console.log('----------------------------------------');

        const verifyPass1 = await compare(plainPassword1, hash1);
        console.log(`Is plainPassword1 corresponding to the created hash1: ${verifyPass1}`);

        const verifyPass2 = await compare('some wrong password', hash2);
        console.log(`Is plainPassword2 corresponding to the created hash2: ${verifyPass2}`);
    } catch (error) {console.error(error.message)}
})();