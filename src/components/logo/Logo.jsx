import { Link } from "react-router-dom"
import "./logo.css"

const Logo = () => {
    return (
        <Link className="logo" to="/">
            <span>MC</span>
            <span className="material-symbols-outlined logo-img">movie_filter</span>
        </Link>
    )
}

export default Logo;