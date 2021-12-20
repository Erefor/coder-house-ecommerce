/* eslint-disable react-hooks/exhaustive-deps */
import './ItemDetailContainer.css'
import {useParams, Link} from "react-router-dom";
import {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import ItemCount from "../ItemCount";
export default function ItemDetailContainer() {
    const [movie, setMovie] = useState(null)
    const { id } = useParams()
    let itemsSelected = 0
    async function getFilmData() {
        const resp = await fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
        const decodeResp = await resp.json()
        setMovie(decodeResp)
    }
    function getSelectedItems(items) {
        itemsSelected = items
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
