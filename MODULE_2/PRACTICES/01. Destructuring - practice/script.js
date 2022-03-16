// Practice Objects
const data = {
    name: {
      firstName: 'ana',
      lastName: 'marino',
    },
    isStudent: true,
    favoriteFootballTeam: 'Rosario Central',
    hometown: {
      city: 'Rosario',
      country: 'Argentina',
    },
};

/* Given the previous object data, use the object destructuring to be able to print student first and last name,
favorite football club, as well as the city and the country this student is coming from. */

const {
    name: {firstName, lastName},
    isStudent,
    favoriteFootballTeam,
    hometown: {city, country}
} = data;

console.log(
    `Hello my name is ${firstName} ${lastName}, my favorite football club is ${favoriteFootballTeam}, and I am from `
    + `${city}, ${country}`
);

// Examples destructuring array
// Example 1
const campuses1 = ['madrid', 'barcelona', 'miami'];

const [firstCampus, secondCampus, thirdCampus] = campuses1;
console.log(thirdCampus); // miami

// Example 2
const campuses2 = ['madrid', 'barcelona', 'miami'];

const [, second] = campuses2;
console.log(second); // <== barcelona

// Example 3
const campuses3 = ['madrid', 'barcelona', 'miami'];

const [campus3_1, campus3_2, campus3_3, campus3_4] = campuses3;
console.log(campus3_4); // ==> undefined

// Example 4
const campuses4 = ['madrid', 'barcelona', 'miami'];

const [campus4_1, campus4_2, campus4_3, campus4_4 = 'paris'] = campuses4;
console.log(campus4_4); // ==> paris

// Example 5
const europeanCampuses = [
    ['madrid', 'es'],
    ['barcelona', 'es'],
    ['berlin', 'de'],
    ['paris', 'fr'],
    ['amsterdam', 'nl'],
    ['lisbon', 'pt'],
];
const [[campusSpain1], [campusSpain2, country2], [campus5, theCountry]] = europeanCampuses;

console.log(campusSpain1, campusSpain2, country2, theCountry);
// ==> 'madrid' 'barcelona' 'es' 'de'

// Practice Arrays
// What would be expected outputs?
const [a, b] = [1];
console.log(a * b); // <== NaN

const [c, d = 1] = [2];
console.log(c * d); // <== 2

let [e, f = 2, h, i = 1] = [3, 4];
console.log(e, f, h, i); // ==> 3, 4, undefined, 1