/* eslint-disable react-hooks/exhaustive-deps */
import './ItemListContainer.css'
import {useEffect, useRef, useState} from "react";
import ItemList from "./itemList";
import SSpiner from "../Atoms/SSpinner";
import {getDocs, collection, query, where} from "firebase/firestore";
import db from "../../Servides/Firebase";
import { useLocation, useParams } from "react-router-dom";

export default function ItemListContainer({greeting, items}) {
    const route = useLocation()
    const {selectedCategory} = useParams()
    const [movies, setMovies] = useState([])
    const showErrMsg = useRef(false)
    async function getMovies() {
        const docRef = collection(db,'movies')
        await getDocs(docRef).then(e => {
            setMovies(e.docs.map(item => ({...item.data()})))
        });
    }

    async function getCategory() {
        const q = query(collection(db,'movies'), where("release_date", "==", selectedCategory))
        await getDocs(q).then(e => {
            if (e.docs.length > 0) {
                setMovies(e.docs.map(movie => ({...movie.data()})))
                return
            }
            showErrMsg.current = true
            setMovies([])
        })
    }
    useEffect(() => {
            if (route.pathname.includes('/category')){
                getCategory()
                return
            }
            getMovies()
        showErrMsg.current = false
    }, [route.pathname])
    return (
        movies.length && !showErrMsg.current ? (<div className="item-list-container">
            <h3>{greeting}</h3>
            <ItemList items={movies}/>
        </div>) : (showErrMsg.current && movies.length === 0 ? <h1 className="noResults">No hay resultados</h1> : <SSpiner />))
}
