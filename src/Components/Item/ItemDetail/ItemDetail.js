import './ItemDetail.css'

export default function ItemDetail({ movieData:{title, image, release_date, description}}) {
    return (
        <div className="item-detail">
            <div className="item-image" style={{backgroundImage: image ? `url('${image}')`: ''}} />
            <div className="item-data">
                <h2>{title ?? 'Sin titulo'}</h2>
                <h3> {`$${release_date}.00`} </h3>
                <p>{description}</p>
            </div>
        </div>
    )
}
