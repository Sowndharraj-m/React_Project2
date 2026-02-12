import './App.css'
import MovieCard from './components/MovieCard'

function App() {

   const Movienumber = 2
   return (

      /* (Movienumber == 2) ?
         (<MovieCard movie={{ title: "RRR", rating: 8.5, description: "RRR is a 2022 Indian Telugu-language epic action drama film directed by S. S. Rajamouli." }} /> )
         : 
         (<MovieCard movie={{ title: "Master", rating: 8.5, description: "Master is a 2021 Indian Tamil-language action drama film directed by Lokesh Kanagaraj." }} />) */
      (Movienumber == 2 && (<MovieCard movie={{ title: "RRR", rating: 8.5, description: "RRR is a 2022 Indian Telugu-language epic action drama film directed by S. S. Rajamouli." }} />)
      )
   )
}
export default App
