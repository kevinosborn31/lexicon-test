import React from 'react';
import './styles/style.css';
import { useEffect, useState } from 'react';
import getData from './utils/getData';
import getMovies from './utils/getMovies';
import Movies from './components/Movies';

function App() {

  const [movies, setMovies] = useState(false)

  const [error, setError] = useState();

  const getFilms = async () => {
    let res = await getData(setError)
    setMovies(res)
  }

  return (
    <Movies />
  );
}

export default App;
