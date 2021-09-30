import MovieListing from './MovieListing';

const MoviesContainer = ({movieList}) => {

  return(
    <div>
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
    </div>
  )
}

export default MoviesContainer;
