import './styles/style.css';
import getMovies from "./utils";
import MovieListing from './components/MovieListing';

const filmWorld = getMovies("filmworld");

const cinemaWorld = getMovies("cinemaworld");

function App() {
  return (
    <div className="page-wrapper">
        <h1 className="primary-header">Prince's Theatre</h1>
        <h2 className="secondary-header">Classic Movies At Home</h2>
        <p className="random-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et ex ac risus volutpat pellentesque a nec nisi. In massa justo, viverra ut cursus sit amet, lacinia at metus. Donec ut est ut mi mollis pharetra quis a mauris. Nunc at justo velit. Quisque enim massa, porttitor venenatis dictum vitae, lobortis at sem.</p>
        <h2 className="mobile-header">Classic Movie List</h2>
        <MovieListing />
    </div>
  );
}

export default App;
