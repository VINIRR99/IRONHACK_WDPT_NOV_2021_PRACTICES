import {
    AddForm,
    FormControl,
    FormControlCheck,
    LabelText,
    LabelCheck,
    InputText,
    InputCheck,
    SubmitButton
} from "./styles";
import { useState } from "react";

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState("");
    const [day, setDay] = useState("");
    const [reminder, setReminder] = useState(false);

    const onSubmit = event => {
        event.preventDefault();

        if (text.length !== 0) {
            alert(`Adding ${text}`);
            onAdd({ text, day, reminder });

            setText("");
            setDay("");
            setReminder(false);
        } else {
            alert("Please add a Task");
        }
    };

    return (
        <AddForm onSubmit={onSubmit}>
            <FormControl>
                <LabelText>Task:</LabelText>
                <InputText type="text" placeholder="Add Task" value={text} onChange={e => setText(e.target.value)} />
            </FormControl>
            <FormControl>
                <LabelText>Day & Time:</LabelText>
                <InputText type="text" placeholder="Add Day & Time" value={day} onChange={e => setDay(e.target.value)} />
            </FormControl>
            <FormControlCheck>
                <LabelCheck>Set Reminder:</LabelCheck>
                <InputCheck type="checkbox" checked={reminder} onChange={e => setReminder(e.currentTarget.checked)} />
            </FormControlCheck>
            <SubmitButton type="submit" value="Save Task" />
        </AddForm>
    );
};

export default AddTask;