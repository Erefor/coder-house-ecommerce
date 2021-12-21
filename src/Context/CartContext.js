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

    function clearCartitems() {
        setCart([])
    }

    function removeItem(item) {
        const ephemeralArray = cart
        const index = cart.findIndex(e => e.id === item.id)
        ephemeralArray.splice(index, 1)
        setCart(ephemeralArray)
    }
    return (
        // eslint-disable-next-line react/jsx-pascal-case
        <CartContext.Provider value={{cart, setCart, addItem}}>
            {children}
        </CartContext.Provider>
    )
}
export {CarritoProvider, CartConsumer}
