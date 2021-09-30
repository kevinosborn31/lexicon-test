const getMovies = (filmMovies, cinemaMovies) => {

    let movieData = {movies: []};

    // Merge both cinema's movies into one array of movies
    for (let cinemaMovie of cinemaMovies) {
      for (let filmMovie of filmMovies) {
        if (filmMovie.Title === cinemaMovie.Title) {
          movieData.movies.push ({
            id: cinemaMovie.ID,
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