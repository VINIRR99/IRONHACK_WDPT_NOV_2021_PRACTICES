import { StyledTask, TaskText, XIcon } from "./styles";

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <StyledTask onDoubleClick={() => onToggle(task.id)} reminder={task.reminder}>
            <TaskText>{task.text} <XIcon onClick={() => onDelete(task.id)} /></TaskText>
            <p>{task.day}</p>
        </StyledTask>
    );
};

export default Task;