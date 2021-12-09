/* eslint-disable react-hooks/exhaustive-deps */
import './ItemDetailContainer.css'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
export default function ItemDetailContainer() {
    const [movie, setMovie] = useState(null)
    const { id } = useParams()
    async function getFilmData() {
        const resp = await fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
        const decodeResp = await resp.json()
        setMovie(decodeResp)
    }
    useEffect(() => {
        getFilmData()
    }, [])
    return (
        <div className="item-detail-container">
            {movie && (<ItemDetail movieData={movie}/>)}
        </div>
    )
}
