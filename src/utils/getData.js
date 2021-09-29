import api from "./api";
import createMovies from "./createMovies"


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


const getData = async (setError, setOpen) => {
  
  try{
    const filmResponse = await filmApi.get('filmworld/movies')
    const filmData = await filmResponse.data.Movies
    const cinemaResponse = await filmApi.get('cinemaworld/movies')
    const cinemaData = await cinemaResponse.data.Movies
    const movieList = await createMovies(cinemaData, filmData)
    return movieList
  } catch {
    setError("Failed to load data. Reloading.");
    setOpen(true);
  }
}
export default getData;