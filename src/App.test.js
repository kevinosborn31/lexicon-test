import App from './App';
import getMovies from './utils/getMovies';

test('Combines the two cinema objects', () => {
    const object1 = [{
        ID: "", 
        Title: "title1",  
        Poster: "", 
        Price: 1
      },
      {
        ID: "",
        Poster: "",
        Title: "title2",
        Price: 2,
      }
    ]
    
    const object2 = [{
        ID: "", 
        Title: "title1",  
        Poster: "", 
        Price: 3
      },
      {
        Actors: "",
        ID: "",
        Poster: "",
        Price: 4,
        Title: "title2",
      }
    ]
  
    const combinedObject = {
      movies:[
        {
          id: "",
          title: "title1",
          poster: "",
          cinemaPrice: "3.00",
          filmPrice: "1.00"
        },
        {
          id: "",
          title: "title2",
          poster: "",
          cinemaPrice: "4.00",
          filmPrice: "2.00"
        }
      ]
    } 
  
    expect(getMovies(object1, object2)).toStrictEqual(combinedObject)
  })
  
