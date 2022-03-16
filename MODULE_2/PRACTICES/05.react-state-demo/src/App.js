import React, { useState, useEffect } from "react";
import Counter from "./components/1.react-state-demo/Counter";
import MoviesList from "./components/2.list-and-keys/MoviesList";
import Form from "./components/3.form/Form";
import TextareaAndSelectTagDemo from "./components/4.textarea-and-select-tag/TextareaAndSelectTagDemo";
import Example1 from "./components/5.life-cycles-example/Example1";
import Example2 from "./components/5.life-cycles-example/Example2";
import Example3 from "./components/5.life-cycles-example/Example3";
import apiCountries from "./utils/apiCountries";
import ApiExample from "./components/ApiExample";

const App = () => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const newCountries = await apiCountries.getAllCountries()
      setCountries(newCountries)
    }
    fetchData()
  }, []);

  return (
    <>
      <h1>React state Demo</h1>
      <Counter />
      <hr />
      <h1>List and keys</h1>
      <ul>
        <MoviesList />
      </ul>
      <hr />
      <h1>Form</h1>
      <Form />
      <hr />
      <h1>TextareaAndSelectTagDemo</h1>
      <TextareaAndSelectTagDemo />
      <hr />
      <h1>LifeCyclesExample</h1>
      <h3>Example 1</h3>
      <Example1 />
      <h3>Example 2</h3>
      <Example2 />
      <h3>Example 3</h3>
      <Example3 />
      <hr />
      <h1>ApiExample</h1>
      <ApiExample countries={countries} />
    </>
  );
};

export default App;