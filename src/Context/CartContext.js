import {createContext, useContext, useState} from "react";

const CartContext = createContext([])
const CartConsumer = () => useContext(CartContext)

function CarritoProvider({children}) {
    const [cart, setCart] = useState([])

    function addItem(newItem, count) {
        const capturedItem = {itemsSelected: count, ...newItem}
        const isInCart = cart.some(e => e.id === newItem.id )
        if (count > 0) {
            if (!isInCart) {
                setCart([...cart, capturedItem])
                return
            }
            alert("Ya tienes ese artículo en tu carrito")
            return
        }
        alert('No puedes agregar 0 de cantidad')

    }

    function clearCartItems() {
        setCart([])
    }

    function removeItem(item) {
        const ephemeralArray = cart.filter(e => e.id !== item)
        setCart(ephemeralArray)
    }
    function isInCart(item) {
        const itemFind = cart.find(e => e.id === item.id)
        return !!itemFind
    }
    return (
        // eslint-disable-next-line react/jsx-pascal-case
        <CartContext.Provider value={{cart, setCart, addItem, clearCartItems, removeItem, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}
export {CarritoProvider, CartConsumer}
