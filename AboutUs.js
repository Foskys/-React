import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";
import logo from "./images/logot.png";
import foto1 from "./images/company.jpg";
import foto2 from "./images/sasha.jpg";
import foto3 from "./images/Motisha.jpg";
import foto4 from "./images/nadya.jpg";
import foto5 from "./images/kosya.jpg";
import foto6 from "./images/vika.jpg";
import foto7 from "./images/ivan.jpg";

const AboutUs = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <div className="about-us">
      <header className="header">
        <Link to="/">
          <img src={logo} alt="Foskys Boots Logo" className="logo" />
        </Link>

        <nav className="nav">
          <Link to="/" className="nav-link">Главная</Link>

            <div className="nav-link" onClick={() => setDropdownVisible(!dropdownVisible)}>
            Каталог
            <div className={`dropdown-menu ${dropdownVisible ? 'visible' : ''}`}>
          <Link to="/mens-shoes">Мужская обувь</Link>
          <Link to="/woman">Женская обувь</Link>
          <Link to="/kids">Детская обувь</Link>
            </div>
          </div>

          <a href="/cart" className="nav-link">Корзина</a>
          <div className="account-icon" onClick={() => window.location.href = '/auth'}></div>
        </nav>
      </header>

      <main>
        <section className="about-header">
          <h1>Про нас</h1>
        </section>

        <section className="history-section">
          <div className="history-box">
            <div className="image-wrapper">
              <div className="image-container centered">
                <img src={foto1} alt="Описание изображения 1" className="history-image" />
              </div>
            </div>
            <p>
                В 2024 году интернет-магазин кастомной обуви <strong>Foskys Boots</strong> был запущен с амбициозной целью изменить рынок обуви и предложить клиентам уникальный опыт покупки. Наша команда объединила свои таланты и опыт, чтобы воплотить в жизнь проект, который позволил бы каждому клиенту выразить свой стиль и индивидуальность через уникальные дизайны обуви. Каждое решение, каждая мелочь в дизайне обуви была тщательно продумана и проверена, чтобы обеспечить качество и комфорт.
Процесс создания интернет-магазина кастомной обуви был долгим и упорным. Мы столкнулись с множеством вызовов — от подбора подходящих материалов и технологий до создания удобной платформы для клиентов, чтобы они могли легко и просто создать свою идеальную пару обуви. Это потребовало не только технических навыков, но и креативного подхода, чтобы предложить разнообразие стилей и моделей, которые бы удовлетворили любые предпочтения.
Сегодня <strong>Foskys Boots</strong> — это не просто интернет-магазин. Это воплощение мечты, терпения и упорства. Каждый клиент, который выбирает кастомную обувь от **Foskys Boots**, получает не просто пару обуви, а часть нашей страсти к моде, к индивидуальному стилю и к качеству. Мы гордимся тем, что смогли создать уникальное пространство, где каждый может найти свою идеальную пару обуви и почувствовать себя частью большого, вдохновляющего сообщества.
            </p>
          </div>
        </section>

        <section className="team-section">
          <h1>Наша команда</h1>
          <div className="team-members">
            <div className="member-card">
              <img src={foto6} alt="Шманай" className="photo-thumbnail" />
              <p>Шманай Виктория</p>
              <p>Основатель магазина</p>
            </div>
            <div className="member-card">
              <img src={foto2} alt="Лаптева" className="photo-thumbnail" />
              <p>Лаптева Александра</p>
              <p>Продавец-консультант</p>
            </div>
            <div className="member-card">
              <img src={foto3} alt="Каспорович" className="photo-thumbnail" />
              <p>Каспорович Матвей</p>
              <p>Разработчик сайта</p>
            </div>
            <div className="member-card">
              <img src={foto4} alt="Гринюк" className="photo-thumbnail" />
              <p>Гринюк Надежда</p>
              <p>Технический директор</p>
            </div>
            <div className="member-card">
              <img src={foto5} alt="Кабан" className="photo-thumbnail" />
              <p>Кабан Константин</p>
              <p>Разработчик дизайна</p>
            </div>
            <div className="member-card">
              <img src={foto7} alt="Савченко" className="photo-thumbnail" />
              <p>Савченко Иван</p>
              <p>Продавец-консультант</p>
            </div>
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
};

export default AboutUs;
