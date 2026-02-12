
import MovieCard from "../components/MovieCard"

function Homepage() {
   const movies = [
      { id: 1, title: "RRR", releaseDate: 2020 },
      { id: 2, title: "Master", releaseDate: 2021 },
      { id: 3, title: "Vikram", releaseDate: 2022 },
      { id: 4, title: "Leo", releaseDate: 2023 },
      { id: 5, title: "Jailer", releaseDate: 2024 }
   ]

   return <div className="Homepage">
      <div>
         <div className="movie-grid">
            {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
         </div>
      </div>
   </div>
}

export default Homepage
