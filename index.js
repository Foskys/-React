import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App"; // Главная страница
import AboutUs from "./AboutUs"; // Страница "Информация про нас"
import MensShoes from "./Catalog"; // Каталог мужской обуви
import Cart from "./Cart"; 
import Woman from "./Woman"; 
import Kids from "./Kids"; 
import Auth from "./Auth";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/mens-shoes" element={<MensShoes />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/Woman" element={<Woman />} />
      <Route path="/Kids" element={<Kids />} />
      <Route path="/Auth" element={<Auth />} />
    

    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
