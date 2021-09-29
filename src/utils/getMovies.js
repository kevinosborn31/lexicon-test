const getMovies = (filmMovies, cinemaMovies) => {
    let listOfMovies = {movies: []};
  
    if(filmMovies.length === 0 || cinemaMovies === 0) return null
  

    cinemaMovies.forEach(cinemaMovie => {
      filmMovies.forEach(filmMovie => {
        if(filmMovie.ID || filmMovie.ID && filmMovie.ID.slice(2) === cinemaMovie.ID.slice(2)){
            listOfMovies.movies.push ({
              id: cinemaMovie.ID.slice(2),
              title: cinemaMovie.Title,
              poster: cinemaMovie.Poster,
              cinemaPrice: cinemaMovie.Price.toFixed(2),
              filmPrice: filmMovie.Price.toFixed(2)
            })
        }
      })
    })
  
    if(listOfMovies.movies.length === 0){return {error: "Incorrect or missing Inputs"}}
    return listOfMovies;
  }

  export default getMovies;