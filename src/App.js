import React from 'react';
import './styles/style.css';
import { useEffect, useState } from 'react';
import getData from './utils/getData';
import getMovies from './utils/getMovies';
import Movies from './components/Movies';

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
    <Movies />
  );
}

export default App;
