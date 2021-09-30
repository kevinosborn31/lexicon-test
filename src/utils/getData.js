import api from "./api";
import getMovies from "./getMovies"


const getData = async (setError) => {
  
  try{
    const filmResponse = await api.get('filmworld/movies')
    const filmData = await filmResponse.data.Movies
    const cinemaResponse = await api.get('cinemaworld/movies')
    const cinemaData = await cinemaResponse.data.Movies
    console.log("film data" + filmData)
    console.log("cinema data" + cinemaData)
    const movieList = await getMovies(cinemaData, filmData)
    console.log(movieList);
    return movieList
  } catch {
    setError("Failed to load data. Reloading.");
  }
}

export default getData;