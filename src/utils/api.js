import axios from 'axios';


const api = axios.create({
  baseURL: 'https://challenge.lexicondigital.com.au/api/v2/',
  headers: {
      'x-api-key': 'Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7'
    }
})

export default api;