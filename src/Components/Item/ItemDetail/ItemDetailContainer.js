/* eslint-disable react-hooks/exhaustive-deps */
import './ItemDetailContainer.css'
import {useParams, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import ItemCount from "../ItemCount";
import {CartConsumer} from "../../../Context/CartContext";
import { getDocs, collection, query, where } from "firebase/firestore";
import db from "../../../Services/Firebase";
import SButton from "../../Atoms/SButton";
export default function ItemDetailContainer() {
    const { addItem, isInCart } = CartConsumer()
    const navigate = useNavigate()
    const [movie, setMovie] = useState(null)
    const { id } = useParams()
    async function getFilmData() {
        const response = query(collection(db,'movies'), where("id", "==", id))
        getDocs(response).then(e => {
            setMovie(e.docs[0].data())
        })
    }
    function getSelectedItems(itemsCount) {
        addItem(movie, itemsCount)
    }
    useEffect(() => {
        getFilmData()
    }, [])
    return (
        movie && <div className="item-detail-container">
            <ItemDetail movieData={movie}/>
            { !isInCart(movie) ?
                    <ItemCount stock={parseInt(movie.running_time, 10)} onAdd={getSelectedItems}/>
                    : <SButton clickFunction={() => navigate('/cart')} text="Ir al carrito" /> }
        </div>
    )
}
