const connectDb = require('./config/db.connection');
const User = require('./models/User');

connectDb();

const addNewUser = userObject => {
  const user = new User(userObject);

  user.save().then(newUser => console.log(`A new user is created: ${newUser}!`))
    .catch(err => console.log(`Error while creating a new user: ${err}`));
};

//addNewUser({ name: 'Alice', password: 'ironhack2018', job: 'Architect' });