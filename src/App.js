import React from 'react';
import './styles/style.css';
import { useEffect, useState } from 'react';
import getData from './utils/getData';
import getMovies from './utils/getMovies';
import MoviesContainer from './components/MoviesContainer';

function App() {

  const [movieList, setMovies] = useState(false);

  const [error, setError] = useState();

  const getMovieData = async () => {
    let response = await getData(setError)
    setMovies(response)
  }

  useEffect(() => {
    getMovieData()
  }, []);

  return (
    <div>
      {movieList && <MoviesContainer movieList={movieList}/>}
    </div>
    
  );
}

export default App;
