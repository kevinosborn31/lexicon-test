import '../styles/style.css';




const MovieListing= ({id, image, title, cinemaPrice, filmPrice}) => {

    return (
        <div className="movie-listing-wrapper">
            <div className="movie-image-wrapper">
                <img src={image} alt={title} />
            </div>
            <div className="movie-info">
                <h2 className="movie-name">{title}</h2>
                <p className="cinema-name">Cinemaworld</p>
                <p className="movie-price">{cinemaPrice}</p>
                <p className="cinema-name">Filmworld</p>
                <p className="movie-price">{filmPrice}</p>
            </div>
        </div>
    )
}






export default MovieListing;