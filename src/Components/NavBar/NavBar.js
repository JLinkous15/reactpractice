import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar-item"><Link to="useRef">useRef</Link></li>
            <li className="navbar-item"><Link to="useReducer">useReducer</Link></li>
        </ul>
    )
}