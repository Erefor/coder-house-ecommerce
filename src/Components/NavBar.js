import CartWidget from "./CartWidget";
import './NavBar.css'
import { Link } from "react-router-dom";

export default function NavBar() {
    return(
        <nav>
            <h1><Link to="/">Películas Studio Ghibli</Link></h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/category/categorias-sin-definir">Category</Link></li>
            </ul>
            <CartWidget />
        </nav>
    )
}
