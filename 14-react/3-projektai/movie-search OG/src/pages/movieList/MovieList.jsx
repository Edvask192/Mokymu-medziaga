import SearchBar from "../../components/searchBar/searchBar";
import Header from "../../components/header/Header";
import { useState } from "react";

const API_URL = 'https://www.omdbapi.com/';
const API_KEY = 'apikey=a2526df0';

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    const [searchState, setSearchState] = useState('');

    const onSearchInputChange = (event) => {
        setSearchState(event.target.value);
    }

    const onEnterPress = (event) => {
        if (event.code === "Enter") {
            console.log(searchState);
            const url = `${API_URL}?s=${searchState}&${API_KEY}`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    if (data.Response === "True") {
                        setMovies(data.Search);
                    } else {
                        setMovies([]);
                    }
                })
                .catch(error => console.log(error))
        }
    }

    return (
        <>
            <Header text="Movie Search" />
            <SearchBar
                onChangeMethod={onSearchInputChange}
                onEnterPressMethod={onEnterPress}
            />
            <div className="movie-results">
                {movies.map(movie => (
                    <div key={movie.imdbID} className="movie-card">
                        <img src={movie.Poster}/>
                        <h5>{movie.Title}</h5>
                        <h6>{movie.Type}</h6>
                        <p>{movie.Year}</p>
                    </div>
                ))}
            </div>

        </>
    )
}

export default MovieList;