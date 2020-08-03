import React from "react";
import s from "./MyMessage.module.css";

const MyMessage = (props) => {
    return (
        <div className={s.message}>
            <div className={s.text}>{props.message}</div><div className={s.time}>{props.date}</div>
        </div>
    );
};

export default MyMessage