import React from "react";

const ApiExample = ( {countries} ) => {
    return (
        <div>
            {[...countries].map((country, i) => <h4 key={country._id}>{country.name.common}</h4>)}
        </div>
    );
};

export default ApiExample;