// ProductCard.js
import React, { useState } from 'react';
const ProductCard = ({ product, addToCart, removeFromCart }) => {
  const [inCart, setInCart] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setInCart(true);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product);
    setInCart(false);
  };

  return (
    <div className="card h-100 ">
      <img src={product.image} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <p>{product.title}</p>
        <p className="card-text">{product.price}rs</p>
       

        {inCart ? (
          <button onClick={handleRemoveFromCart} className="btn btn-danger">
            Remove from Cart
          </button>
        ) : (
          <button onClick={handleAddToCart} className="btn btn-primary">
            Add to Cart
          </button>
        )}
      </div>
      
    </div>
  );
};

export default ProductCard;
