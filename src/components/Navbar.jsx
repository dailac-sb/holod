import React from "react";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div>
        <ul>
          <li><a href="#profile">Профиль</a></li>
          <li><a href="#recipe">Рецепты</a></li>
          <li><a href="#posts">Новости</a></li>
          <li><a href="#messages">Сообщения</a></li>
          <li><a href="#favorites">Закладки</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar