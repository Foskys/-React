import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import logo from "./images/logot.png";
import slide1 from "./images/assor.jpg";
import slide2 from "./images/1w.jpg";
import slide3 from "./images/4w.jpg";
import slide5 from "./images/men.jpg";
import slide6 from "./images/woman.jpg";
import slide7 from "./images/kids.jpg";
import slide8 from "./images/company.jpg";

function App() {
  const slides = [slide1, slide2, slide3];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const nextSlide = () => setCurrentSlide((currentSlide + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);

  return (
    <div className="app">
      <header className="header">
        <img
          src={logo}
          alt="Foskys Boots Logo"
          className="logo"
          onClick={() => window.location.reload()}
        />
        <nav className="nav">
          <Link to="/about" className="nav-link">Про Нас</Link>


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

      <main>
        <section className="welcome">
          <h1>Добро пожаловать в мой магазин кастомной обуви!</h1>
        </section>

        <section className="slider">
          <div className="slider-overlay"></div>

          <img
            src={slides[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            className="slider-image"/>

          <div className="slider-content">
            <p>Здесь вы можете заказать обувь с различными готовыми кастомами, а в последующем и сами создавать, проявляя весь ваш творческий потенциал</p>
            <button
              className="btn-assortment"
              onClick={() => (window.location.href = "/woman")}
            >
              Ассортимент
            </button>
          </div>

          <div
            className="slider-arrow left"
            onClick={prevSlide}
            title="Предыдущий слайд"
          >
            ←
          </div>
          <div
            className="slider-arrow right"
            onClick={nextSlide}
            title="Следующий слайд"
          >
            →
          </div>
        </section>

        <section className="why-us">
          <h2>Почему Вы должны использовать наш Веб-сайт?</h2>
        </section>

        <section className="about text-box">
          <p>
            <span className="bold">Foskys Boots</span> это не просто интернет-магазин обуви, это целая история о стиле, комфорте и высоком качестве. Мы уверены, что каждая пара обуви, купленная у нас, — это не просто покупка, а настоящий вклад в уверенность в каждом шаге. Наши мастера выбирают только натуральные и качественные материалы, которые мы тщательно проверяем на долговечность, удобство и элегантность. Мы вбираем в каждую деталь не только знания и опыт, но и душу, потому что понимаем:
            <span className="quote">
              "<span className="highlight"><strong>Обувь</strong></span> — это не просто элемент гардероба, это отражение вашего характера а наша фирма <strong>Foskys Boots</strong> — это про мечты, которые стали реальностью, и заботу о тех, кто выбирает только лучшее."
            </span>
            <span className="bold">Мы верим, что обувь</span> — это не просто средство передвижения, это способ самовыражения, стиль жизни и маленькая история, которую вы рассказываете миру с каждым шагом. Откройте для себя наш мир <strong>Foskys Boots</strong> — мир, где стиль и комфорт встречаются, чтобы сделать каждый ваш день особенным.
          </p>
        </section>

        <section className="categories">
          <Link to="/mens-shoes" className="category" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src={slide5} alt="Для мужчин" />
            <p>For Men</p>
          </Link>
          <Link to="/woman" className="category"onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src={slide6} alt="Для женщин" />
            <p>For Women</p>
          </Link>
          <Link to="/kids" className="category"onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src={slide7} alt="Для детей" />
            <p>For Kids</p>
          </Link>
        </section>

        <section className="promo-section">
          <h2>Информация:</h2>
          <div className="promo-box">
            <div className="promo-image">
              <img src={slide8} alt="Информация" />
            </div>
            <div className="promo-text">
              <p>Рассказ про то, кто состоит и как создал этот магазин можно узнать подробно...</p>
            </div>
            <button
              className="promo-button"
              onClick={() => (window.location.href = "/about")}
            >
              &#9654; {/* Стрелка */}
            </button>
          </div>
        </section>

      </main>

      <footer className="footer">
        <div className="contact">
          <p>ФИО: Шманай Виктория</p>
          <p>Телефон: +375298652225</p>
        </div>
        <div className="socials">
          <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
            VK
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://facebook.com"
            target="_blank" rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
 