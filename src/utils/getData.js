import api from "./api";
import getMovies from "./getMovies"


const getData = async (throwError) => {

  async function retryRequest(cinema) {
    return new Promise(async (resolve, reject) => {
      let retries = 0;
      const maxRetries = 100;
      let success = false;
  
      while (retries < maxRetries && !success) {
        try {
          const response = await api.get(`${cinema}/movies`);
          success = true;
          resolve(response.data.Movies); 
        } catch (err) {
          const status = err?.response?.status || 500;
          console.log(`Error Status: ${status}`);
          retries++;
        }
      }
      reject();
    })
  }
  try { 
    const filmResponse = await retryRequest("filmworld").catch((err) => { console.error(err); });
    console.log(filmResponse);
    const cinemaResponse = await retryRequest("cinemaworld").catch((err) => { console.error(err); });
    const movieList = getMovies(cinemaResponse, filmResponse);
    return movieList;
  } catch {
    throwError("Sorry, please try again later");
  }
}

export default getData;