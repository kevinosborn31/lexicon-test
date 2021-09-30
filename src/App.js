import React from 'react';
import './styles/style.css';
import { useEffect, useState } from 'react';
import getData from './utils/getData';
import getMovies from './utils/getMovies';
import MoviesContainer from './components/MoviesContainer';

function App() {

  const [movies, setMovies] = useState();

  const [error, setError] = useState();

  const getMovieData = async () => {
    let res = await getData(setError)
    setMovies(res)
  }

  useEffect(() => {
    getMovieData()
    // Empty array to prevent loop
  }, []);

  console.log(movies);

  return (
    <MoviesContainer
      movies={movies}
    />
  );
}

export default App;
