/* eslint-disable react-hooks/exhaustive-deps */
import './Cart.css'
import {CartConsumer } from "../Context/CartContext";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import SButton from "../Components/Atoms/SButton";


export default function Cart() {
    const {cart, removeItem} = CartConsumer()
    const [totalPrice, setPrecioTotal] = useState(0)
    console.log(cart)
    useEffect(() => {
        let grandTotal = 0
        cart.forEach((el) => {
            const totalSelectedItems = parseInt(el.itemsSelected) * parseInt(el.release_date)
            grandTotal = grandTotal + totalSelectedItems
            setPrecioTotal(grandTotal)
        })
    }, [cart])
    return (
        cart.length
            ?
            (<div className="cart-page-container">
            <ul className="items-selected-list">
                {cart.map(({original_title_romanised, itemsSelected, release_date, id}) =>
                    (<li key={id}>
                        {`Titulo: ${original_title_romanised || 'Sin titulo'}, Cantidad: ${itemsSelected || 'Sin cantidad'}, Precio $${parseInt(release_date)}.00`}
                        <SButton variant="flat" text="Remover del carrito" clickFunction={() => removeItem(id)}/>
                    </li>))}
                <SButton text="Terminar mi compra" />
            </ul>
                <p>Precio total: {`$${totalPrice}.00` || '0'}</p>
        </div>)
            :
            (<div className="cart-page-container">
                <h1>No hay items</h1>
                <Link to="/">Ir a inicio</Link>
            </div>)
    )
}
