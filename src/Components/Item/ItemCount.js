import SButton from "../Atoms/SButton";
import './ItemCount.css'
import {useState} from "react";
import { useParams } from 'react-router-dom'

export default function ItemCount({stock, initial, onAdd}) {
    const [count, setInitialCount] = useState(initial ?? 0)
    function add(event) {
        event.stopPropagation()
        if (stock !== 0) {
            if (count >= stock) {
                setInitialCount(stock)
                return
            }
            setInitialCount(count+1)
        }
    }
    function remove(event) {
        event.stopPropagation()
        if (count <= 0) {
            setInitialCount(0)
            return
        }
        setInitialCount(count-1)
    }

    function emitCount(event) {
        event.stopPropagation()
        onAdd(count)
    }
    const { id} = useParams()
    return id ? <div className="itemCount">
        <div className="buttons">
            <SButton clickFunction={(e) => remove(e)} text="Remover" variant="primary"/>
            <p>{`Stock ${stock ?? 0}`}</p>
            <SButton clickFunction={(e) => add(e)} text="Agregar" variant="primary"/>
        </div>
        <p><strong>{count}</strong></p>
        <SButton text="Agregar al carrito" clickFunction={(e) => emitCount(e)}/>
    </div> : <SButton text="Ver más"/>;
}
