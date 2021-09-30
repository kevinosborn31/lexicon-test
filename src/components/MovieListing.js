import '../styles/style.css';




const MovieListing= ({id, image, title, cinemaPrice, filmPrice}) => {

    return (
        <div className="movie-listing-wrapper">

        <li class="movie-listing-item">
                <div class="movie-image-container">
                    <img src={image} alt={title} />
                </div>
                <div class="movie-info">
                    <p class="movie-name">{title}</p>
                    <p class="movie-price">CinemaWorld: {cinemaPrice}</p>
                    <p class="movie-price">Filmworld: {filmPrice}</p>
                </div>
        </li>
        </div>
    )
}






export default MovieListing;