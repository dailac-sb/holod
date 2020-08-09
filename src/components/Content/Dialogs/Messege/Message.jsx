import React from "react";
import s from "./Message.module.css";

const Message = (props) => {
    return (
        <div className={s.message}>
            <div className={s.text}>{props.message}</div>
            <div className={s.time}>{props.date}</div>
        </div>
    );
};

export default Message