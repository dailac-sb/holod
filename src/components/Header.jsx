import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <table>
        <tr>
          <td className={s.logo}>
            <a href="#home">
              <img
                src="https://yt3.ggpht.com/a/AATXAJxhmzNF0YsviPxA6P6Kqa-vC1pRTqz0c3K7UA=s900-c-k-c0xffffffff-no-rj-mo"
                alt=""/>
            </a>
          </td>
          <td className={s.name}>
            <a href="#home">Рецепторий.ру</a>
          </td>
          <td className={s.search}>
            <div>Поиск</div>
          </td>
          <td className={s.menu}>
            <ul>
              <li><a href="#profile">Профиль</a></li>
              <li><a href="#recipe">Рецепты</a></li>
              <li><a href="#posts">Новости</a></li>
              <li><a href="#messages">Сообщения</a></li>
              <li><a href="#favorites">Закладки</a></li>
            </ul>
          </td>
          <td className={s.login}>
            <div>Login</div>
          </td>
        </tr>
      </table>

    </header>
  );
};

export default Header