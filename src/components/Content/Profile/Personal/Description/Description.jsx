import React from "react";
import s from "./Description.module.css";

const Description = (props) => {
    return (
        <div>
            <div className={s.info}>
                {props.firstName} {props.lastName}
            </div>
            <div className={s.info}>
                Дата рождения: {props.birthday}
            </div>
            <div className={s.info}>
                Город: {props.homeCity}
            </div>
            <div className={s.info}>
                {props.aboutMe}
            </div>
        </div>
    );
};

export default Description