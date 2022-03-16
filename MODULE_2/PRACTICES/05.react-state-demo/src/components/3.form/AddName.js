const AddName = ( {onSubmit, name, onChange} ) => (
    <form onSubmit={onSubmit}>
        <label>
            Name:
            <input type="text" value={name} onChange={onChange} />
        </label>
        <button>Submit</button>
    </form>
);

export default AddName;