/* eslint-disable react-hooks/exhaustive-deps */
import './ItemDetailContainer.css'
import {useParams, Link} from "react-router-dom";
import {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import ItemCount from "../ItemCount";
import {CartConsumer} from "../../../Context/CartContext";
import { getDocs, collection, query, where } from "firebase/firestore";
import db from "../../../Services/Firebase";
export default function ItemDetailContainer() {
    const { addItem } = CartConsumer()
    const [movie, setMovie] = useState(null)
    const { id } = useParams()
    async function getFilmData() {
        const q = query(collection(db,'movies'), where("id", "==", id))
        getDocs(q).then(e => {
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
        <div className="item-detail-container">
            <Link to="/cart">Terminar compra</Link>
            {movie && (<ItemDetail movieData={movie}/>)}
            {movie && <ItemCount stock={parseInt(movie.running_time, 10)} onAdd={getSelectedItems}/>}
        </div>
    )
}
