import React, { useState, useEffect } from "react";

const Example3 = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => setCounter(counter + 1), 1000);

        return () => clearInterval(intervalId);
    }, [counter])

    return (
        <h3>{counter}</h3>
    );
};

export default Example3;