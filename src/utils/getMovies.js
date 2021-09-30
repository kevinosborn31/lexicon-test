const getMovies = (filmMovies, cinemaMovies) => {
    let movieData = {movies: []};
  
    if(filmMovies.length === 0 || cinemaMovies.length === 0) return null

    for (let cinemaMovie of cinemaMovies) {
      for (let filmMovie of filmMovies) {
        if (filmMovie.Title == cinemaMovie.Title) {
          movieData.movies.push ({
            id: cinemaMovie.ID.slice(2),
            title: cinemaMovie.Title,
            poster: cinemaMovie.Poster,
            cinemaPrice: cinemaMovie.Price.toFixed(2),
            filmPrice: filmMovie.Price.toFixed(2)
          })
          break;
        }
      }
    }
    return movieData;
  }

  export default getMovies;