import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Catalog.css";
import logo from "./images/logot.png";
import foto1 from "./images/1m.jpg"; 
import foto2 from "./images/2m.jpg"; 
import foto3 from "./images/3m.jpg"; 
import foto4 from "./images/4m.jpg"; 
import foto5 from "./images/5m.jpg"; 
import foto6 from "./images/6m.jpg"; 
import foto7 from "./images/7m.jpg"; 
import foto8 from "./images/8m.jpg"; 
import foto9 from "./images/9m.jpg"; 

const productData = [
    {
      name: "Nike",
      image: <img src={foto1} alt="Product 1" className="photo-thumbnail" />, 
      price: "220BYN",
      sizes: [39, 40, 41, 42, 43, 44, 45],
    },
    {
      name: "Adidas",
      image: <img src={foto2} alt="Product 2" className="photo-thumbnail" />, 
      price: "330BYN",
      sizes: [39, 40, 41, 42, 43, 44, 45],
    },
    {
      name: "Nike",
      image: <img src={foto3} alt="Product 3" className="photo-thumbnail" />, 
      price: "250BYN",
      sizes: [39, 40, 41, 42, 43, 44, 45],
    },
    {
      name: "Converse",
      image: <img src={foto4} alt="Product 4" className="photo-thumbnail" />, 
      price: "209BYN",
      sizes: [39, 40, 41, 42, 43, 44, 45],
    },
    {
      name: "Nike",
      image: <img src={foto5} alt="Product 5" className="photo-thumbnail" />, 
      price: "267BYN",
      sizes: [39, 40, 41, 42, 43, 44, 45],
    },
    {
      name: "Nike",
      image: <img src={foto6} alt="Product 6" className="photo-thumbnail" />, 
      price: "310BYN",
      sizes: [39, 40, 41, 42, 43, 44, 45],
    },
    {
        name: "Mst.Martins",
        image: <img src={foto7} alt="Product 1" className="photo-thumbnail" />, 
        price: "199BYN",
        sizes: [39, 40, 41, 42, 43, 44, 45],
      },
      {
        name: "Nike",
        image: <img src={foto8} alt="Product 2" className="photo-thumbnail" />, 
        price: "256BYN",
        sizes: [38, 39, 40, 41, 42, 43],
      },
      {
        name: "Nike",
        image: <img src={foto9} alt="Product 3" className="photo-thumbnail" />, 
        price: "200BYN",
        sizes: [36, 37, 38, 39, 40],
      },
    
];

const Catalog = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortedProducts, setSortedProducts] = useState(productData);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filteredProducts = productData.filter(product => 
      product.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSortedProducts(filteredProducts);
  };

  const handleSort = (order) => {
    const sorted = [...sortedProducts].sort((a, b) => {
      const priceA = parseInt(a.price.replace('$', ''));
      const priceB = parseInt(b.price.replace('$', ''));
      return order === 'asc' ? priceA - priceB : priceB - priceA;
    });
    setSortedProducts(sorted);
  };

  return (
    <div className="catalog-page">
      <header className="header">
        <img
          src={logo}
          alt="Foskys Boots Logo"
          className="logo"
          onClick={() => window.location.href = '/'} 
        />
        <nav className="nav">
          <Link to="/" className="nav-link">Главная</Link>
          <Link to="/about" className="nav-link">Про Нас</Link>

          {/* Каталог с выпадающим списком */}
                              <div className="nav-link" onClick={() => setDropdownVisible(!dropdownVisible)}>
                                  Каталог
                                  <div className={`dropdown-menu ${dropdownVisible ? 'visible' : ''}`}>
                                      <Link to="/mens-shoes">Мужская обувь</Link>
                                      <Link to="/woman">Женская обувь</Link>
                                      <Link to="/kids">Детская обувь</Link>
                                  </div>
                    </div>
          <Link to="/cart" className="nav-link">Корзина</Link>
          <div className="account-icon" onClick={() => window.location.href = '/auth'}></div>
        </nav>
      </header>

      <main className="catalog-content">
        <h1 className="welcome">Мужской ассортимент</h1>
        <div className="search-sort">
          <input
            type="text"
            placeholder="Поиск по названию"
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
          <div className="sort-box">
            <span>Сортировка по цене:</span>
            <button className="sort-button" onClick={() => handleSort('asc')}>
            ▲
            </button>
            <button className="sort-button" onClick={() => handleSort('desc')}>
            ▼
            </button>
          </div>
        </div>
        <div className="products-grid">
          {sortedProducts.map((product, index) => (
            <div className="product-card" key={index}>
              <div className="photo-placeholder">
                {product.image}
              </div>
              <h2 className="product-name">{product.name}</h2>
              <p className="price-color">{product.price}</p>
              <p className="sizesText">Sizes:</p>
              <div className="product-sizes">
                {product.sizes.map((size) => (
                  <span key={size}>{size}</span>
                ))}
              </div>
              <button className="btn-buy">Купить</button>
            </div>
          ))}
        </div>
      </main>

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

export default Catalog;
