const { hashSync } = require('bcryptjs');
const plainPassword1 = 'HelloWorld';
 
for (let saltRounds = 10; saltRounds < 19; saltRounds += 1) {
  console.time(`bcrypt | cost: ${saltRounds}, time to hash`);
  hashSync(plainPassword1, saltRounds);
  console.timeEnd(`bcrypt | cost: ${saltRounds}, time to hash`);
}