import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Для перенаправления
import "./Auth.css";

const Auth = () => {
  const [isRegister, setIsRegister] = useState(true); // Состояние: Регистрация/Вход
  const [email, setEmail] = useState(""); // Почта
  const [password, setPassword] = useState(""); // Пароль
  const [error, setError] = useState(""); // Сообщение об ошибке
  const [profilePhoto, setProfilePhoto] = useState(null); // Фото профиля
  const [preview, setPreview] = useState(null); // Предпросмотр фото

  const navigate = useNavigate(); // Хук для перехода на другую страницу

  // Обработчик изменения фото
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePhoto(file);
      setPreview(URL.createObjectURL(file)); // Генерация предпросмотра фото
    }
  };

  // Проверка почты
  const validateEmail = (email) => {
    return email.includes("@") && email.includes(".");
  };

  // Проверка пароля
  const validatePassword = (password) => {
    return password.length >= 8;
  };

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();

    // Проверка корректности email
    if (!validateEmail(email)) {
      setError("Пожалуйста, введите корректный email с @ и точкой.");
      return;
    }

    // Проверка на пустой пароль
    if (password.trim() === "") {
      setError("Пожалуйста, введите пароль.");
      return;
    }

    // Проверка длины пароля
    if (!validatePassword(password)) {
      setError("Пароль должен быть не менее 8 символов.");
      return;
    }

    setError(""); // Сброс ошибок

    // Показать сообщение и перенаправить
    setTimeout(() => {
      alert(
        isRegister
          ? "Вы успешно зарегистрированы! Перенос на главную..."
          : "Вы успешно вошли в аккаунт! Перенос на главную..."
      );
      navigate("/"); // Перенос на главную страницу
    }, 500);
  };

  return (
    <div className="auth-container">
      <h1>{isRegister ? "Регистрация" : "Вход"}</h1>

      <div className="auth-switch">
        <button
          onClick={() => setIsRegister(true)}
          className={isRegister ? "active" : ""}
        >
          Регистрация
        </button>
        <button
          onClick={() => setIsRegister(false)}
          className={!isRegister ? "active" : ""}
        >
          Вход
        </button>
      </div>

      <form onSubmit={handleSubmit} className="auth-form">
        <label>
          Email:
          <input
            type="email"
            placeholder="Введите вашу почту"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          Пароль:
          <input
            type="password"
            placeholder="Введите ваш пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        {isRegister && (
          <label className="photo-upload">
            Фото профиля:
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
            />
            {preview && (
              <img
                src={preview}
                alt="Предпросмотр"
                className="profile-preview"
              />
            )}
          </label>
        )}

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="auth-button">
          {isRegister ? "Зарегистрироваться" : "Войти"}
        </button>
      </form>
    </div>
  );
};

export default Auth;
