import React from "react";
import { Link } from 'react-router-dom';

const Foods = ( {foods} ) => {
    return (
        <div>
            <h1>Foods</h1>
            {foods.map(food => (
                <div key={food.name}>
                    <Link to={`/foods/${food.name.split(" ").join("").toLowerCase()}`}>{food.name}</Link>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default Foods;