import {useRef} from 'react'
import SButton from "./Atoms/SButton";
import './form.css'
import db from '../Services/Firebase'
import {useNavigate} from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore'
export default function Form({total, cartItems, clearCart}) {
    const userName = useRef('')
    const userEmail = useRef('')
    const userPhone = useRef('')
    const navigate = useNavigate()

    async function registerPurchase(e) {
        e.preventDefault()
        if (userName.current && userEmail.current && userPhone.current) {
            let sellData = {
                user: {
                    name: userName,
                    email: userEmail,
                    phone: userPhone,
                },
                items: {...cartItems},
                total,
            }
            const col = collection(db, 'tickets')
            await addDoc(col, sellData)
            clearCart()
            navigate('/')
            alert(`Se ha realiza compra de forma exitosa`)
            return
        }
        alert('Verifica los campos')
    }
    return (
        <form>
            <h3>{`$${total}.00`}</h3>
            <label className="s-mt-12">Nombre de usuario</label>
            <input type="text" onChange={(e) => {userName.current = e.target.value}}/>
            <label className="s-mt-12">Correo</label>
            <input type="email" onChange={(e) => {userEmail.current = e.target.value}}/>
            <label className="s-mt-12">Teléfono</label>
            <input className="s-mb-12" type="tel" onChange={(e) => {userPhone.current = e.target.value}}/>
            <SButton variant="light" clickFunction={registerPurchase} text="Terminar mi compra" />
        </form>
    )
}
