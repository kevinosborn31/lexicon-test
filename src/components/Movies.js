import MovieListing from './MovieListing';

function Movies() {

    const [state, setState] = useState([])
    const url = `https://challenge.lexicondigital.com.au/api/v2/filmworld/movies`
    useEffect(() => {
      fetch(url, {
        method: "GET",
        headers: {
            "x-api-key": "Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7"
        }
    })
    .then(
            res => setState(res.data),
        )
  })
  
  console.log(state);
  
}

export default Movies;
