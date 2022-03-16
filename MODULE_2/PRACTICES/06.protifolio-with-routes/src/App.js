import React from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import Error from "./components/Error";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import ProjectDetails from './components/ProjectDetails';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  const myProjects = [
    {
      id: "1a",
      name: "The Frogger Clone",
      year: 2017,
      technologies: "JavaScript, jQuery",
      description: "The first project game clone."
    },
    {
        id: "2b",
        name: "iTravel",
        year: 2017,
        technologies: "Mongo DB, ExpressJS, NodeJS, JavaScript, HTML, CSS",
        description: "Web App that allows logged in users to share their experiences about travel destinations."
    },
    {
        id: "3c",
        name: "The Plan",
        year: 2017,
        technologies: "Mongo DB, ExpressJS, Angular2, NodeJS, JavaScript, HTML, CSS",
        description: "Web App that allows logged in users to plan your next activity with your friends or business partners."
    }
  ];

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/*' element={ <Error /> }/>
        <Route exact path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route exact path='/projects' element={ <Projects myProjects={myProjects} /> } />
        <Route exact path='/projects/:id' element={ <ProjectDetails myProjects={myProjects} /> } />
      </Routes>
    </>
  );
};

export default App;