import './SButton.css'
export default function SButton({clickFunction ,text, variant, borderRadius, children}) {

    return (
        <button onClick={clickFunction} className={`${variant ?? 'primary'} ${borderRadius ?? 'normal'} size`}>
            {text ?? 'Texto aquí'}
            { !!children ? children : ''}
        </button>
    )
}
