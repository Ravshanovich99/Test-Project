export const ShoppingCart = ({ itemCount }) => {
    return (
        <>
            <div className="shopping-cart">
                <i className="material-icons">shopping_cart</i>
                <p>Перейти в корзину</p>
                <span>{itemCount}</span>
            </div>
        </>
    )
}