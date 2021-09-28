export function getMovies(cinema) {
    return fetch(`https://challenge.lexicondigital.com.au/api/v2/${cinema}/movies`)
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