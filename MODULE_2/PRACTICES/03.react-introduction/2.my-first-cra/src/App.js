import React from 'react';
import logo from './logo.svg';
import './App.css';

// 1:
const statement = <h1> React is cool! </h1>;

// 2:
const student = {
  firstName: 'ana',
  lastName: 'martinez'
};

// 3:
const { firstName, lastName } = student;

// 4:
function capitalizeFirstLetter() {
  return `I have capitalized first letters: ${firstName[0].toUpperCase() + firstName.slice(1)} ${
    lastName[0].toUpperCase() + lastName.slice(1)
  }!`;
}

let fullName = "vinícius leite batista";

function capitalizeFullName() {
  const fullNameArray = fullName.split(" ");
  const capitalizedArray = fullNameArray.map(word => word[0].toUpperCase() + word.slice(1));
  const capitalizedFullName = capitalizedArray.join(" ");

  return `I have capitalized first letters: ${capitalizedFullName}!`;
}

function App() {
  return (
    <div className='App'>
      {/* 1: */}
      {statement}
      {/* 2: */}
      <h3>
        Hi, {student.firstName} {student.lastName}!
      </h3>
      {/* 3: */}
      <h4>
        Here is uppercased: {firstName.toUpperCase()} {lastName.toUpperCase()}.
      </h4>

      {/* 4: */}
      <h4>{capitalizeFirstLetter()}</h4>

      <div>
        <img
          src='https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_129040de20781c45366fd2193fcbb5fd.png'
          alt='react is cool'
        />
        <h3>
          Hi, {fullName}!
        </h3>
        <h4>
          Here is uppercased: {fullName.toUpperCase()}.
        </h4>

        <h4>{capitalizeFullName()}</h4>

        <img src={logo} alt="logo is cool" />
      </div>
    </div>
  );
}

export default App;