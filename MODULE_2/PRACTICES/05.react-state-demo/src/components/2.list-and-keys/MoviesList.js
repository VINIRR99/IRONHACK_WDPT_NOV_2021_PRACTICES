import React, { useState } from 'react';
import AddMovie from './AddMovie';
import Card from './Card';

const MoviesList = () => {
    const [movies, setMovies] = useState(
        [
            { id: "fUbJPciPq", title: "The Godfather", director: "Francis Coppola", hasOscars: true, IMDbRating: 9.2 },
            { id: "EXN9npPlo",  title: "Star Wars", director: "Rian Johnson" , hasOscars: true, IMDbRating: 8.7 },
            { id: "lecqGHnAb",  title: "The Shawshank Redemption", director: "Frank Darabont", hasOscars: false, IMDbRating: 9.3 }
        ]
    );

    const deleteMovies = id => {
        const newMovies = movies.filter(item => item.id !== id);

        setMovies(newMovies);
    };

    const addHarryPotter = () => {
        const harryPotter = { id: "eJtLaiCk", title: "Harry Potter", director: "Chris Columbus", hasOscasrs: false, IMDbRating: 7.6 };
        const newMovies = [...movies, harryPotter];
        const harryPotterMovies = movies.filter(item => item.id === harryPotter.id);

        if (harryPotterMovies.length === 0) {
            setMovies(newMovies);
        };
        console.log(newMovies);
    };

    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [hasOscars, setOscar] = useState(false);
    const [IMDbRating, setRating] = useState("");

    const randomId = () => {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let result = "";

        for ( let i = 0; i < movies[0].id.length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        const moviesId = [...movies].filter(movie => movie.id);

        if (!moviesId.includes(result)) {
            return result;
        } else {
            randomId();
        };
    };

    const handleSubmit = event => {
        event.preventDefault();
        alert(`Submitting Movie: ${title}`);

        const newMovies = [...movies, { id: randomId(),  title: title, director: director, hasOscars: hasOscars, IMDbRating: IMDbRating }];

        setMovies(newMovies);
        console.log(newMovies);
    };

    return (
        <div>
            <AddMovie
                onSubmit={e => handleSubmit(e)}
                title={title}
                titleChange={e => setTitle(e.target.value)}
                director={director}
                directorChange={e => setDirector(e.target.value)}
                hasOscars={hasOscars}
                oscarChange={e => setOscar(e.target.checked)}
                IMDbRating={IMDbRating}
                ratingChange={e => setRating(e.target.value)}
            />
            {
                movies.map(item => {
                    return <Card key={item.id} title={item.title} director={item.director} deleteMovie={() => deleteMovies(item.id)} hasOscars={item.hasOscars} IMDbRating={item.IMDbRating}/>
                })
            }
            <button onClick={addHarryPotter}>Add Harry Potter</button>
        </div>
    );
};

export default MoviesList;