const productDetails = ({ product }) => {
    return (
        <div className="product-details">
            <h4>{product.name}</h4>
            <p><strong>ID: </strong> {product._id}</p>
            <p><strong>Image: </strong> {product.image}</p>
            <p><strong>Barcode: </strong> {product.barcode}</p>
            <p><strong>Price: </strong> {product.price}</p>
        </div>
    )
}

export default productDetails