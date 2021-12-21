import CartWidget from "./CartWidget";
import './NavBar.css'
import { Link } from "react-router-dom";
import {CartConsumer} from "../Context/CartContext";

export default function NavBar() {
    const { cart } = CartConsumer()
    return(
        <nav>
            <h1><Link to="/">Películas Studio Ghibli</Link></h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/category/categorias-sin-definir">Category</Link></li>
            </ul>
            <div className="cart-widget"><p>{cart.length || 'Sin items'}</p><CartWidget/></div>
        </nav>
    )
}
