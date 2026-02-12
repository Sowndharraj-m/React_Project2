import { Link } from "react-router-dom"
function NavBar(){
    return(
        <nav className="NavBar">
            <div className="NavBar-logo">
             <Link to="/">Home</Link>
             <Link to="/favorite">Favorite</Link>
             </div>

            <div className="NavBar-user">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </nav>
    )
}
export default NavBar   