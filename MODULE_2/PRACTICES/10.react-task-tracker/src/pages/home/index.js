import AddTask from "../../components/add-task";
import Tasks from "../../components/tasks";

const Home = ({ showForm, addTask, tasks, deleteTask, toggleReminder }) => (
    <div>
        {showForm && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : "No Tasks to show"}
    </div>
);

export default Home;