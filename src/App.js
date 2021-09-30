import React from 'react';
import './styles/style.css';
import { useEffect, useState } from 'react';
import getData from './utils/getData';
import getMovies from './utils/getMovies';
import MoviesContainer from './components/MoviesContainer';

function App() {

  const [movieList, setMovies] = useState(false);

  const [error, throwError] = useState();

  const getMovieData = async () => {
    let response = await getData(setError)
    setMovies(response)
  }

  useEffect(() => {
    getMovieData()
  }, []);

  return (
    <div className="page-wrapper">
      <div className="header-wrapper">
        <h1 className="center">Prince's Theatre</h1>
        <h2 className="center">Classic Movies At Home</h2>
        <p className="random-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et ex ac risus volutpat pellentesque a nec nisi. In massa justo, viverra ut cursus sit amet, lacinia at metus. Donec ut est ut mi mollis pharetra quis a mauris. Nunc at justo velit. Quisque enim massa, porttitor venenatis dictum vitae, lobortis at sem.</p>
        <h2 className="mobile-header">Classic Movie List</h2>
      </div>
        {movieList && <MoviesContainer movieList={movieList}/>}
    </div>
    
  );
}

export default App;
