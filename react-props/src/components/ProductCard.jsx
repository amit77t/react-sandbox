function ProductCard({ name, description, price, rating, category, icon }) {
  return (
    <article className="product-card">
      <div className="product-art" aria-hidden="true">
        <span className="product-category">{category}</span>
        <span className="product-icon">{icon}</span>
      </div>
      <div className="product-info">
        <h2 className="product-name">{name}</h2>
        <p className="product-description">{description}</p>
        <div className="product-card-footer">
          <span className="product-price">₹{price.toLocaleString('en-IN')}</span>
          <span className="product-rating" aria-label={`Rated ${rating} out of 5`}>
            <span className="product-rating-star" aria-hidden="true">★</span>
            {rating}
          </span>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;