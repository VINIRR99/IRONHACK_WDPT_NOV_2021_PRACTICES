import React from "react";

const AddedList = ( {addedStudents} ) => {
    const agesArray = addedStudents.map(student => parseInt(student.age, 10));

    const agesSum = agesArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return (
        <div>
            <ul>
                {addedStudents.length > 0 && addedStudents.map(student => (
                    <li key={student.name}>
                        <div>
                            <p>Student's name: {student.name}</p>
                            <p>Student's age: {student.age}</p>
                        </div>
                        <hr />
                    </li>
                ))}
            </ul>
            <p>Students sumed age: {agesSum}</p>
        </div>
    );
};

export default AddedList;