import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Footer from './components/footer';
import About from './pages/about';

class TasksApi {
  constructor () {
    this.api = axios.create({
      baseURL: "http://localhost:5000/tasks"
    })
  };

  fetchData = async () => {
    const { data } = await this.api.get("/");
    return data;
  };

  updateReminder = async (id, task) => {
    await this.api.put(`/${id}`, task);
  };

  deleteTask = async id => {
    await this.api.delete(`/${id}`);
  };

  postTask = async task => {
    const { data } = await this.api.post("/", task);
    return data;
  };
};

const tasksApi = new TasksApi();

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => (async () => setTasks(await tasksApi.fetchData()))(), [])

  // Add Task
  const addTask = async task => {
    const data = await tasksApi.postTask(task);
    setTasks([...tasks, data]);
  };

  // Delete task
  const deleteTask = async id => {
    await tasksApi.deleteTask(id);
    setTasks(tasks.filter(task => task.id !== id));
  };
  
  // Toggle reminder
  const toggleReminder = async id => {
    const taskToUpdate = tasks.find(task => task.id === id);
    const updated = {...taskToUpdate, reminder: !taskToUpdate.reminder}
    await tasksApi.updateReminder(id, updated);
    setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task))
  };

  return (
    <>
      <Header onAdd={() => setShowForm(!showForm)} showAdd={showForm} />
      <Routes>
        <Route exact path="/" element={ <Home showForm={showForm} addTask={addTask} tasks={tasks} deleteTask={deleteTask} toggleReminder={toggleReminder} /> } />
        <Route exact path="/about" element={ <About /> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
