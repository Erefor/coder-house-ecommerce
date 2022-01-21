/* eslint-disable react-hooks/exhaustive-deps */
import './Cart.css'
import {CartConsumer } from "../Context/CartContext";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import SButton from "../Components/Atoms/SButton";
import Form from "../Components/Form";


export default function Cart() {
    const {cart, removeItem, clearCartItems} = CartConsumer()
    const [totalPrice, setTotalPrice] = useState(0)
    useEffect(() => {
        let grandTotal = 0
        cart.forEach((el) => {
            const totalSelectedItems = parseInt(el.itemsSelected) * parseInt(el.release_date)
            grandTotal = grandTotal + totalSelectedItems
            setTotalPrice(grandTotal)
        })
    }, [cart])
    return (
        cart.length
            ?
            (<div className="cart-page-container">
                <Form clearCart={clearCartItems} cartItems={cart} total={totalPrice} />
            <ul className="items-selected-list">
                <SButton clickFunction={clearCartItems} variant="light" text="LimpiarCarrito" />
                {cart.map(({original_title_romanised, itemsSelected, release_date, id}) =>
                    (<li key={id}>
                        {`Titulo: ${original_title_romanised || 'Sin titulo'}, Cantidad: ${itemsSelected || 'Sin cantidad'}, Precio $${parseInt(release_date)}.00`}
                        <SButton variant="light" text="Remover del carrito" clickFunction={() => removeItem(id)}/>
                    </li>))}
            </ul>

        </div>)
            :
            (<div className="cart-page-container">
                <h1 className="no-items-msg">No hay items</h1>
                <Link to="/">Ir a inicio</Link>
            </div>)
    )
}
