import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <ul className="navbar">
            <li><Link to="useRef">useRef</Link></li>
        </ul>
    )
}