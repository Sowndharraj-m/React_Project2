import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Favorite from './Pages/Favorite'
import NavBar from './components/NavBar'
function App(){   

   return (
      <main className="Main-Content">  
         <NavBar />
         <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/favorite" element={<Favorite />} />
         </Routes>   
      </main>
   )
}
export default App
