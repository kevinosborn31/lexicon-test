import api from "./api";
import getMovies from "./getMovies"


const getData = async (setError) => {
  
  try { 
    const filmResponse = await api.get('filmworld/movies')
    const filmData = await filmResponse.data.Movies
    const cinemaResponse = await api.get('cinemaworld/movies')
    const cinemaData = await cinemaResponse.data.Movies
    const movieList = await getMovies(cinemaData, filmData)
    return movieList
  } catch {
    throwError("Unable to load data");
  }
}

export default getData;