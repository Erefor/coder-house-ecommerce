/* eslint-disable react-hooks/exhaustive-deps */
import ItemCount from "./ItemCount";
import './Item.css'
import {useEffect, useState} from "react";
export default function Item({item}) {
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
    useEffect(() => {
        getMovieImage()

    }, [])
    return (
        <div className="item">
            <div className="title-container">
                <h2 className="movie-title">{item.original_title_romanised}</h2>
                <img src={image} alt="Movie" className="movie-image"/>
                <h4 className="movie-price">{`$${item.release_date}.00`}</h4>
            </div>
            <ItemCount stock={parseInt(item.running_time, 10)}/>
        </div>
    )
}
