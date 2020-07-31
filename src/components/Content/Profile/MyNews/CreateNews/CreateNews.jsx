import React from "react";
import s from "./CreateNews.module.css";

const CreateNews = () => {
    return (
        <div>
            Поделится новостью:
            <input className={s.input}/>
            <button>Опубликовать</button>
        </div>
    );
};

export default CreateNews