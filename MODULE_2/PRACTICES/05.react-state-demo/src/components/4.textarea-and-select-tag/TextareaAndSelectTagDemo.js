import { useState } from 'react';

const TextareaAndSelectTagDemo = () => {
    const [selectInputValue, setSelect] = useState("Notebook");
    const [textareaInputValue, setTextarea] = useState("...");

    return (
        <form onSubmit={e => alert(selectInputValue + ' <==> ' + textareaInputValue)}>
            <label> Pick your favorite movie: </label>
    
            <select name="selectInputValue" value={selectInputValue} onChange={e => setSelect(e.target.value)} >
                <option value={selectInputValue}>{selectInputValue}</option>
                <option value="Star Wars">Star Wars</option>
                <option value="The Godfather">The Godfather</option>
                <option value="Titanic">Titanic</option>
                <option value="Seven">Seven</option>
            </select>
            
            <label> Why is this your favorite movie? </label>
            <textarea name="textareaInputValue" value={textareaInputValue} onChange={e => setTextarea(e.target.value)} />
            
            <button>Submit</button>
        </form>
    );
};

export default TextareaAndSelectTagDemo;