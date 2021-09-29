export function getMovies(cinema) {
    const url = `https://challenge.lexicondigital.com.au/api/v2/${cinema}/movies`
    return fetch(url, {
        method: "GET",
        headers: {
            "x-api-key": "Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7"
        }
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Something went wrong');
            }
        })
        .then((responseJson) => {
            console.log(responseJson)
        })
        .catch((error) => {
            console.log(error)
        });

    }

export default getMovies;