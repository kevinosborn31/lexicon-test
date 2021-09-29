import api from "./api";
import getMovies from "./getMovies"


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