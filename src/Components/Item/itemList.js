import './ItemListContainer.css'
import Item from "./Item";
export default function ItemList({items}){
    return (
        <div className="items-container">
            {items && items.map(e => (<Item key={e.id} item={e} />))}
        </div>
    )
}
