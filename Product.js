import React, { useState } from "react";
import "./App.css";

const Product = ({ product, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Пожалуйста, выберите размер перед покупкой!");
      return;
    }

    // Добавляем товар в корзину
    onAddToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      size: selectedSize,
      price: product.price,
      quantity: 1,
    });
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <div className="size-selector">
        <p>Выберите размер:</p>
        {product.sizes.map((size) => (
          <button
            key={size}
            className={`size-btn ${selectedSize === size ? "active" : ""}`}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Купить
      </button>
    </div>
  );
};

export default Product;
