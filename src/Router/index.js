import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from "../Components/Item/ItemListContainer";
import ItemDetailContainer from "../Components/Item/ItemDetail/ItemDetailContainer";
import NavBar from "../Components/NavBar";
import Cart from "../Pages/Cart";
import {CarritoProvider} from "../Context/CartContext";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <CarritoProvider>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<ItemListContainer/>}/>
                    <Route path="/category/:selectedCategory" element={<ItemListContainer/>}/>
                    <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                </Routes>
            </CarritoProvider>
        </BrowserRouter>
    )
}
