import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"
import { fetchMovies } from "../Service/API"


function Homepage() {
   const [search, setSearch] = useState("")
   const [movies, setMovies] = useState([])
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)
   useEffect(() => {
      const loadMovies = async () => {
         try {
            const response = await fetchMovies()
            setMovies(response || [])
         }
         catch (error) {
            setError(error)
         }
         finally {
            setLoading(false)
         }
      }
      loadMovies()
   }, [])


   const handlesearch = (e) => {
      e.preventDefault()
      console.log(search)
      setSearch("")
   }

   return (
      <div className="Homepage">
         <form onSubmit={handlesearch} className="search-form">
            <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
            <button type="submit">Search</button>
         </form>

         <div className="movie-grid">
            {loading ? <p>Loading...</p> : error ? <p>{error.message}</p> : movies.map((movie) => movie.title.toLowerCase().includes(search.toLowerCase()) && <MovieCard key={movie.id} movie={movie} />)}
         </div>
      </div>
   )
}

export default Homepage
