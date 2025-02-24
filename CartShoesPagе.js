import React from "react";
import "../cart.css";

const CartShoesPage = ({ cartItems, setCartItems }) => {
  const handleCheckout = () => {
    if (cartItems.length > 0) {
      setCartItems([]); // Очистка корзины
      alert("Ваш заказ оформлен! Спасибо за покупку.");
    } else {
      alert("Ваша корзина пуста. Добавьте товары перед оформлением заказа.");
    }
  };

  return (
    <div className="cart-container">
      <h2>Корзина с обувью</h2>

      {cartItems.length > 0 ? (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p>Категория: {item.category}</p>
                <p>Цена: {item.price} ₽</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="empty-cart-message">Ваша корзина пуста :(</p>
      )}

      <button className="checkout-button" onClick={handleCheckout}>
        Оформить заказ
      </button>
    </div>
  );
};

export default CartShoesPage;
