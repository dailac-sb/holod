import React from "react";
import s from "./Name.module.css";
import {NavLink} from "react-router-dom";

const Name = () => {
    return (
        <div className={s.name}>
            <NavLink to="/">Рецепторий.ру</NavLink>
        </div>
    );
};

export default Name