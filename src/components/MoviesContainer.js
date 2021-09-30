import MovieListing from './MovieListing';
import { useState, useEffect } from 'react';

const MoviesContainer = ({movies}) => {

  return(
    <div>
        {movies.movies.map(({id, poster, title, cwPrice, fwPrice}) => (
          <MovieListing 
            id={id} 
            image={poster} 
            cinemaPrice={cwPrice} 
            filmPrice={fwPrice} 
            title={title} 
            key={`${title}-${id}`}
          />
        ))}
    </div>
  )
}

export default MoviesContainer;
