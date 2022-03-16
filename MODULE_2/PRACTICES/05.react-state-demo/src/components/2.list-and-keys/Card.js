const Card = ( {title, director, deleteMovie, hasOscars, IMDbRating} ) => {
    let awardText;

    if(hasOscars){
        if(IMDbRating >= 9){
            awardText = <p> WOW! Oscar Award and IMDb rating {IMDbRating}! </p>
        } else if(IMDbRating >= 7){
            awardText = <p> Got the Oscar Award and has IMDb rating {IMDbRating}, not bad at all! </p>
        }
    } else {
        awardText = <p> Great movie but no Oscars! Has IMDb rating {IMDbRating}. </p>
    }

    return (
        <li className="movies-list-item">
            <h2>{title}</h2>
            <p>Director: {director}</p>
            {awardText}
            <button onClick={deleteMovie}>Delete</button>
        </li>
    );
};

export default Card;