import React from "react";
import s from "./Title.module.css";

const Title = (props) => {
    return (
        <img className={s.title} src={props.urlTitle} alt="title"/>
    );
};

export default Title