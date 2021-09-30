import MovieListing from './MovieListing';
import '../styles/style.css';


const MoviesContainer = ({movieList}) => {

  return(
    <div>
      <ul className="movie-listing">
        {movieList.movies.map(({id, poster, title, cinemaPrice, filmPrice}) => (
          <MovieListing 
            id={id} 
            image={poster} 
            title={title} 
            key={`${title}-${id}`}
            cinemaPrice={cinemaPrice} 
            filmPrice={filmPrice}  
          />
        ))}
      </ul>
    </div>
  )
  
}

export default MoviesContainer;
