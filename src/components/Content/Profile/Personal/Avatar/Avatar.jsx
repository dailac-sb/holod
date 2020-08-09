import React from "react";
import s from "./Avatar.module.css";

const Avatar = (props) => {
    return (
        <div>
            <img className={s.avatar} src={props.avatar} alt="Мое фото"/>
        </div>
    );
};

export default Avatar