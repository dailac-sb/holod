import React from "react";
import s from "./Search.module.css";

const Search = () => {

    return (
        <div className={s.search}>
            <input className={s.input} type="text"/>
            <button className={s.button}>Поиск</button>
        </div>
    );
};

export default Search