import '../styles/style.css';




function MovieListing() {

    return (
        <div className="movie-listing-wrapper">
            <div className="movie-image-wrapper">
                <img src="" alt="" />
            </div>
            <div className="movie-info">
                <h2 className="movie-name">Star Wars</h2>
                <p className="cinema-name">Cinemaworld</p>
                <p className="movie-price">$50</p>
                <p className="cinema-name">Filmworld</p>
                <p className="movie-price">$50</p>
            </div>
        </div>
    )
}




export default MovieListing;