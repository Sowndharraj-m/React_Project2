function MovieCard({ movie }) {
    return (
        <>
            <div className="Moviename">
                <div className="Movieposter">
                    <img src={movie.poster} alt="" />
                </div>
                <div className="MovieOverlay"></div>
            </div>
            <div>
                <button>Add to Watchlist</button>
            </div>

            <div className="MovieInfo">
                <p>{movie.title}</p>
                <p>{movie.rating}</p>
                <p>{movie.description}</p>
            </div>
</>
    );
}
export default MovieCard;