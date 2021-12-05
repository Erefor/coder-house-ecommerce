import './ItemListContainer.css'
import {useEffect, useState} from "react";
import ItemList from "./itemList";

export default function ItemListContainer({greeting, items}) {
    const [movies, setMovies] = useState([])
    async function getMovies() {
        const moviesResp = await fetch('https://ghibliapi.herokuapp.com/films')
        const decodeResp = await moviesResp.json()
        setMovies(decodeResp)
    }
    useEffect(() => {
        setTimeout(() => getMovies(), 2000)
    }, [])
    return (
        <div className="item-list-container">
            <h3>{greeting}</h3>
            <ItemList items={movies}/>
        </div>
    )
}
