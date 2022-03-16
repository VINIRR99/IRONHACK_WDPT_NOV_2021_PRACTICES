const AddMovie = ( {onSubmit, title, titleChange, director, directorChange, hasOscars, oscarChange, IMDbRating, ratingChange} ) => (
    <form onSubmit={onSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={title} onChange={titleChange} />

        <label>Director:</label>
        <input type="text" name="director" value={director} onChange={directorChange} />

        <label>Oscar awarded:</label>
        <input type="checkbox" name="hasOscars" checked={hasOscars} onChange={oscarChange} />

        <label>IMDbRating:</label>
        <input type="text" name="IMDbRating" value={IMDbRating} onChange={ratingChange} />

        <button>Submit</button>
    </form>
);

export default AddMovie;