import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <ul>
                <li><NavLink to="/profile" activeClassName={s.active}>Профиль</NavLink></li>
                <li><NavLink to="/recipes" activeClassName={s.active}>Рецепты</NavLink></li>
                <li><NavLink to="/news" activeClassName={s.active}>Новости</NavLink></li>
                <li><NavLink to="/dialogs" activeClassName={s.active}>Сообщения</NavLink></li>
                <li><NavLink to="/favorites" activeClassName={s.active}>Закладки</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar