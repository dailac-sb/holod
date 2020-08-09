import React from "react";
import s from "./NewPost.module.css";

const NewPost = () => {
    return (
        <div className={s.newP}>
            Поделится новостями:
            <div><textarea className={s.text}/></div>
            <div className={s.button}>
                <button>Опубликовать</button>
            </div>
        </div>
    );
};

export default NewPost