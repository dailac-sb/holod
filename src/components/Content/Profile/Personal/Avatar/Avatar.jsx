import React from "react";
import s from "./Avatar.module.css";

const Avatar = () => {
    return (
        <div>
            <img className={s.avatar} src="https://i12.fotocdn.net/s124/02b97628f471a881/user_l/2821171119.jpg" alt="Мое фото"/>
        </div>
    );
};

export default Avatar