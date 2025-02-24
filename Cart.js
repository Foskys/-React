import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Cart.css"; 
import logo from "./images/logot.png"; 

const shoesData = [
  { id: 1, name: "Nike", category: "Кроссовки", size: 40, price: 330, quantity: 1, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Mst.Martins", category: "Ботинки", size: 42, price: 245, quantity: 1, image: "https://via.placeholder.com/150" },
];

const Cart = () => {
  const [items, setItems] = useState(shoesData);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Увеличение количества
  const increaseQuantity = (id) => {
    setItems(items.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)));
  };

  const decreaseQuantity = (id) => {
    setItems(
      items
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 0 } : item
        )
        .filter((item) => item.quantity > 0) 
    );
  };

  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    alert("Ваш заказ успешно оформлен! 🎉 Спасибо за покупку!");
  };

  return (
    <div className="cart-page">
      <header className="header">
        <img
          src={logo}
          alt="Foskys Boots Logo"
          className="logo"
          onClick={() => (window.location.href = "/")}
        />
        <nav className="nav">
          <Link to="/" className="nav-link">Главная</Link>
          <Link to="/about" className="nav-link">Про Нас</Link>
          <div className="nav-link" onClick={() => setDropdownVisible(!dropdownVisible)}>
            Каталог
            <div className={`dropdown-menu ${dropdownVisible ? "visible" : ""}`}>
              <Link to="/mens-shoes">Мужская обувь</Link>
              <Link to="/woman">Женская обувь</Link>
              <Link to="/kids">Детская обувь</Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Основной контент корзины */}
      <main className="cart-content">
        <h1 className="welcome">Ваша корзина</h1>

        {items.length > 0 ? (
          <div className="cart-wrapper">
            {items.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-size">Размер: {item.size}</p>
                  <p className="cart-item-price">{item.price} ₽</p>
                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="empty-cart-message">Корзина пуста :(</p>
        )}

        {/* Итоговая сумма и кнопка оформления заказа */}
        <div className="cart-summary">
          <p>Итоговая сумма: {totalPrice.toLocaleString()} ₽</p>
          {items.length > 0 && (
            <button className="btn-checkout" onClick={handleCheckout}>
              Оформить заказ
            </button>
          )}
        </div>
      </main>

      {/* Подвал сайта */}
      <footer className="footer">
        <div className="contact">
          <p>ФИО: Шманай Виктория</p>
          <p>Телефон: +375298652225</p>
        </div>
        <div className="socials">
          <a href="https://vk.com" target="_blank" rel="noopener noreferrer">VK</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
      </footer>
    </div>
  );
};

export default Cart;
