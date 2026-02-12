function MovieCard({ movie }) {
    const posterUrl = movie.poster_path
        ? "https://image.tmdb.org/t/p/w500/" + movie.poster_path
        : null;

    return (
        <div className="Moviename">
            <div className="Movieposter">
                {posterUrl ? (
                    <img src={posterUrl} alt={movie.title} />
                ) : (
                    <div className="poster-placeholder">🎬</div>
                )}
            </div>
            <div className="MovieOverlay"></div>
            <button>Add to Watchlist</button>
            <div className="MovieInfo">
                <p>{movie.title}</p>
                <p>{movie.release_date ? movie.release_date.substring(0, 4) : ""}</p>
                <p>{movie.vote_average ? "⭐ " + movie.vote_average : ""}</p>
                <p>{movie.overview}</p>
            </div>
        </div>
    );
}
export default MovieCard;