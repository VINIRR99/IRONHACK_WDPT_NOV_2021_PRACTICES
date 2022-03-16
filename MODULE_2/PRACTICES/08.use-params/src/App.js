import React from "react";
import Navbar from "./components/NavBar";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Foods from "./components/Foods";
import FoodDetails from "./components/FoodDetails";

const App = () => {
  const foods = [
    {
      name: "Barbecue",
      calories: 500,
      vegan: false
    },
    {
        name: "French Fries",
        calories: 200,
        vegan: true
    },
    {
        name: "Chocolate cake",
        calories: 350,
        vegan: false
    }
  ];

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/foods' element={ <Foods foods={foods} /> } />
        <Route path="/foods/:id" element={ <FoodDetails foods={foods} /> } />
      </Routes>
    </>
  );
}

export default App;