import '../css/main.css'

export function ShopItemFunc({ data }) {

    return (
        <div className="main-content">
            <>
            <h2 className="brand">{data.brand}</h2> 
            </>
            <>
            <h1 className="title">{data.title}</h1>
            <h3 className="description">{data.description}</h3>
            <div className="descriptionFull">{data.descriptionFull}</div>
            <div className="highlight-window mobile">
                    <div className="highlight-overlay"></div>
            </div>
            <div className="divider"></div> 
            <div className="purchase-info">
                <div className="price">
                    <span>{data.currency}{Number(data.price).toFixed(2)}</span>
                </div>
                <button>Добавить в корзину</button>
            </div>
            </>
        </div>
    )
}