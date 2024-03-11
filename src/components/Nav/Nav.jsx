//import route related objects
import { Link } from "react-router-dom";

//import styles
import './Nav.css'

export default function Nav() {
    return (
        <div className="nav">
            <Link to='/'>
                <div>StarWar</div>
            </Link>
            <Link to='/starships'>
                <div>Starships</div>
            </Link>
        </div>
    )
}
