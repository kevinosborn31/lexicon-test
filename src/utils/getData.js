import api from "./api";
import getMovies from "./getMovies"

const getData = async () => {

  // Retry API calls 100x
  async function retryRequest(cinema) {
    return new Promise(async (resolve, reject) => {
      let retries = 0;
      const maxRetries = 50;
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
      reject("Sorry something went wrong, please try again later");
    })
  }
    const filmResponse = await retryRequest("filmworld").catch((err) => { alert(err); });

    const cinemaResponse = await retryRequest("cinemaworld").catch((err) => { alert(err); });

    const movieList = getMovies(cinemaResponse, filmResponse);
    
    return movieList;

}

export default getData;