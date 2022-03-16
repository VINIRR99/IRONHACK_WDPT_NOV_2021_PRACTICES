import React, { useState } from "react";
import AddName from "./AddName";

const NameForm = () => {
    const [names, setName] = useState(["Maria", "João", "Matheus", "José"]);

    const [name, setFormName] = useState("");
    
    const handleSubmit = event => {
        event.preventDefault();
        alert(`Submitting Name ${name}`);

        const newNames = [...names, name];

        setName(newNames);
    };

    return (
        <div>
            <ul>
                {names.map(name => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <AddName onSubmit={e => handleSubmit(e)} name={name} onChange={e => setFormName(e.target.value)} />
        </div>
    );
}

export default NameForm;