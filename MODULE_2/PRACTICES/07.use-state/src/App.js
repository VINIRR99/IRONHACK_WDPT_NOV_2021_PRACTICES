import React from "react";
import AddedList from "./components/AddedList";
import List from "./components/List";

const App = () => {
  const { render: list, addedStudents } = List();

  return (
    <div className="App">
      {list}
      <h1>Added Students</h1>
      <AddedList addedStudents={addedStudents} />
    </div>
  );
}

export default App;
