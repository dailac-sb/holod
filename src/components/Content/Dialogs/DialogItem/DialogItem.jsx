import React from "react";
import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {

    let path = '/dialogs/' + props.idName;

    return (
        <NavLink to={path} activeClassName={s.active} className={s.contact}>
            {props.nickName}
        </NavLink>
    );
};

export default DialogItem