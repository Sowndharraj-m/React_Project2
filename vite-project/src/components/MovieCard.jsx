function MovieCard({ movie }) {
    return (
        <div className="Moviename">
            <div className="Movieposter">
                <img src={movie.poster} alt={movie.title} />
            </div>
            <div className="MovieOverlay"></div>
            <button>Add to Watchlist</button>
            <div className="MovieInfo">
                <p>{movie.title}</p>
                <p>{movie.releaseDate}</p>
                <p>{movie.rating}</p>
                <p>{movie.description}</p>
            </div>
        </div>
    );
}
export default MovieCard;