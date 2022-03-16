const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/exampleApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));

// When successfully connected
mongoose.connection.on('connected', () => console.log('Mongoose default connection open'));
 
// If the connection throws an error
mongoose.connection.on('error', err => console.log(`Mongoose default connection error: ${err}`));
 
// When the connection is disconnected
mongoose.connection.on('disconnected', () => console.log('Mongoose default connection disconnected'));
 
// If the Node process ends, close the Mongoose connection
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

// cats example
const Cat = mongoose.model('Cat', { name: String });

const addNewCat = catName => {
  const kitty = new Cat({ name: catName });

  kitty.save().then(newCat => console.log(`A new cat is created: ${newCat}!`))
    .catch(err => console.log(`Error while creating a new cat: ${err}`));
};

const showCats = async () => {
  try {
    const cats = await Cat.find();
    console.log(cats);
  } catch (error) {console.log(`Error occurred during getting cats from DB: ${error}`)};
};

const addTenCats = () => {for (let i = 1; i <= 10; i += 1) addNewCat(`Ironhacker ${i}`)};

addTenCats();

// We have to wait for our cats to save before displaying them Remember, it's async
setTimeout(showCats, 1500);

// students and cities example
const Student = mongoose.model('Student', { firstName: String });
const City = mongoose.model('City', { name: String });
 
const promise1 = Student.insertMany([{ firstName: 'Alice' }, { firstName: 'Bob' }]);
const promise2 = City.insertMany([{ name: 'Madrid' }, { name: 'Barcelona' }, { name: 'Paris' }]);

Promise.all([promise1, promise2]).then(values => {
  console.log('students and cities have been inserted');
  console.log(values);
  /*
  [ [ { _id: 5a4e462048841e65562c465a, firstName: 'Alice', __v: 0 },
    { _id: 5a4e462048841e65562c465b, firstName: 'Bob', __v: 0 } ],
  [ { _id: 5a4e462048841e65562c465c, name: 'Madrid', __v: 0 },
    { _id: 5a4e462048841e65562c465d, name: 'Barcelona', __v: 0 },
    { _id: 5a4e462048841e65562c465e, name: 'Paris', __v: 0 } ] ]
  */
  mongoose.connection.close();
}).catch(err => console.error(err));