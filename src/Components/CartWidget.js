import './CartWidget.css'
import {Link} from "react-router-dom";
export default function CartWidget() {
    return (
        <span className="material-icons shopping-cart">
            <Link to="/cart">shopping_cart</Link>
        </span>
    )
}
