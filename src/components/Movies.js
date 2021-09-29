import MovieListing from './MovieListing';
import { useState, useEffect } from 'react';

function Movies() {

    const [state, setState] = useState()

    const url = `https://challenge.lexicondigital.com.au/api/v2/filmworld/movies`
    useEffect(() => {
      fetch(url, {
        method: "GET",
        headers: {
            "x-api-key": "Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7"
        }
    })
    .then(response => response.json())
    .then(data => setState(data.Movies));
  }, []);   
  
  console.log(state);

  return (
    <MovieListing />
  );

}

export default Movies;
