import React from "react";
import { Link, useParams } from "react-router-dom";

const FoodDetails = ( {foods} ) => {
    const code = useParams();

    const selectedFood = foods.find(food => food.name.split(" ").join("").toLowerCase() === code.id);

    return (
        <div>
            Name: {selectedFood.name} <br />
            Calories: {selectedFood.calories} <br />
            Vegan: {selectedFood.vegan ? "true" : "false"} <br />
            <hr />
            <Link to="/foods">Back</Link>
        </div>
    );
};

export default FoodDetails;