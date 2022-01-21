/* eslint-disable react-hooks/exhaustive-deps */
import ItemCount from "./ItemCount";
import './Item.css'
import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom'
import {CartConsumer} from "../../Context/CartContext";
import SButton from "../Atoms/SButton";

export default function Item({item}) {
    const navigate = useNavigate()
    const { addItem, isInCart } = CartConsumer()
    const [image, setImage] = useState('https://farm5.staticflickr.com/4363/36346283311_74018f6e7d_o.png')
    async function getMovieImage() {
        try {
            const resp = await fetch(`${item.url}`)
            const decodeResp = await resp.json()
            setImage(decodeResp.image)
        } catch (e) {
            setImage('https://farm5.staticflickr.com/4363/36346283311_74018f6e7d_o.png')
        }
    }
    function getSelectedItems(itemsCount) {
            addItem(item, itemsCount)
    }
    function goToItemDetail() {
        navigate(`/item/${item.id}`)
    }
    useEffect(() => {
        getMovieImage()
    }, [])
    function goToCart(e) {
        e.stopPropagation()
        navigate(`/cart`)
    }
    return (
        <div  className="item" onClick={goToItemDetail}>
            <div className="title-container">
                <h2 className="movie-title">{item.original_title_romanised}</h2>
                <img src={image} alt="Movie" className="movie-image"/>
                <h4 className="movie-price">{`$${item.release_date}.00`}</h4>
            </div>
            {
                isInCart(item) ?
                    <SButton clickFunction={goToCart} text="Ir al carrito"/> :
                    <ItemCount stock={parseInt(item.running_time, 10)} onAdd={getSelectedItems}/>
            }
        </div>
    )
}
