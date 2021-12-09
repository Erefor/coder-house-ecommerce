import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from "../Components/Item/ItemListContainer";
import ItemDetailContainer from "../Components/Item/ItemDetail/ItemDetailContainer";
import NavBar from "../Components/NavBar";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes >
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/categorias-sin-definir" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
            </Routes>
        </BrowserRouter>
    )
}
