import SButton from "../Atoms/SButton";
import './ItemCount.css'
import {useState} from "react";

export default function ItemCount({stock, initial, onAdd}) {
    const [count, setInitialCount] = useState(initial ?? 0)
    function add() {
        if (stock !== 0) {
            if (count >= stock) {
                setInitialCount(stock)
                return
            }
            setInitialCount(count+1)
        }
    }
    function remove() {
        if (count <= 0) {
            setInitialCount(0)
            return
        }
        setInitialCount(count-1)
    }
    return <div className="itemCount">
        <div className="buttons">
            <SButton clickFunction={remove} text="Remover" variant="primary"/>
            <p>{`Stock ${stock ?? 0}`}</p>
            <SButton clickFunction={add} text="Agregar" variant="primary"/>
        </div>
        <p><strong>{count}</strong></p>
        <SButton text="Agregar al carrito"/>
    </div>;
}
