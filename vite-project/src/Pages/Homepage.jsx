import { useState } from "react"
import MovieCard from "../components/MovieCard"

function Homepage() {
   const [search, setSearch] = useState("")
   const movies = [
      { id: 1, title: "RRR", releaseDate: 2020 },
      { id: 2, title: "Master", releaseDate: 2021 },
      { id: 3, title: "Vikram", releaseDate: 2022 },
      { id: 4, title: "Leo", releaseDate: 2023 },
      { id: 5, title: "Jailer", releaseDate: 2024 }
   ]

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
               {movies.map((movie) => movie.title.toLowerCase().includes(search.toLowerCase()) && <MovieCard key={movie.id} movie={movie} />)}
            </div>
         </div>
   )
}

export default Homepage
