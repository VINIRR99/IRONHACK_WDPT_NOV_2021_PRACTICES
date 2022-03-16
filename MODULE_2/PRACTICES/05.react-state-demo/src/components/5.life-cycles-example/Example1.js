import React, { useState, useEffect } from "react";

const Example1 = () => {
    const [resourceType, setResourceType] = useState("Posts");
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json));
    }, [resourceType]);

    return (
        <div>
            <button onClick={() => setResourceType("Posts")}>Posts</button>
            <button onClick={() => setResourceType("Users")}>Users</button>
            <button onClick={() => setResourceType("Comments")}>Comments</button>

            <h3>{resourceType}</h3>
            {items.map(item => <pre>{JSON.stringify(item)}</pre>)}
        </div>
    );
};

export default Example1;