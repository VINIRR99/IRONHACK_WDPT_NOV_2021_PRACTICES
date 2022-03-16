import React, { useState } from "react";

const List = () => {
    const initialStudents = [
        { name: "Maria", age: 0 },
        { name: "José", age: 0 },
        { name: "Mário", age: 0 }
    ];
    
    const [students, setStudents] = useState(initialStudents);

    const changeAge = (event, index) => {
        let uptadedStudents = [...students];
        uptadedStudents[index].age = event.target.value;
        setStudents(uptadedStudents);
    };
    
    const [addedStudents, setAdd] = useState([]);

    return {
        addedStudents,
        render: (
            <ul>
                {students.map((student, i) => (
                    <li key={student.name}>
                        <div>
                            <p>Name: {student.name}</p>
                            <p>
                                Age: 
                                <input
                                    type="number"
                                    name="age"
                                    value={student.age}
                                    onChange={e => changeAge(e, i)}
                                />
                            </p>
                            <button onClick={() => setAdd([...addedStudents, student])}>Add</button>
                        </div>
                        <hr />
                    </li>
                ))}
            </ul>
    )};
};

export default List;