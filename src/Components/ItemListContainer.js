import './ItemListContainer.css'
export default function ItemListContainer({greeting}) {
    return (
        <div className="item-list-container">
            <h3>{greeting}</h3>
        </div>
    )
}
