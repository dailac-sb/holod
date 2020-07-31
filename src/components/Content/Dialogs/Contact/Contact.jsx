import React from "react";
import s from "./Contact.module.css";


const Contact = (props) => {
    return (
        <div className={s.contact}>
            {props.nickName}
        </div>
    );
};

export default Contact