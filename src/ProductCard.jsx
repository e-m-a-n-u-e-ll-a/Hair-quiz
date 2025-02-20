/* eslint-disable react/prop-types */
function ProductCard({ product, toggleLike, likedProducts }) {
    if (!product) return null;
    return (
        <>
            <img src={product.images[0]?.src} alt={product.title} />
            <h3 className='noto-serif-display-tag'>{product.title}</h3>
            <p className='noto-serif-display-tag price'>${product.variants[0]?.price || 'NA'}</p>
            <div className={`heart ${likedProducts.includes(product.id) ? 'liked' : ''}`} onClick={() => toggleLike(product.id)}></div>
        </>
    )
}

export default ProductCard