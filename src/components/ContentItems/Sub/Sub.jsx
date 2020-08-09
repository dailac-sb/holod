import React from "react";
import s from "./Sub.module.css";

const Sub = (props) => {
    return (
        <div className={s.sabBlock}>
            <img className={s.avatar} src={props.avatar} alt={props.nick}/>
            <div className={s.nick}>
                {props.nick}
            </div>
        </div>
    );
}

export default Sub