import React from "react";
import s from "./Logo.module.css";
import {NavLink} from "react-router-dom";

const Logo = () => {
    return (
        <div className={s.logo}>
            <NavLink to="/">
                <img
                    src="https://yt3.ggpht.com/a/AATXAJxhmzNF0YsviPxA6P6Kqa-vC1pRTqz0c3K7UA=s900-c-k-c0xffffffff-no-rj-mo"
                    alt=""/>
            </NavLink>
        </div>

    );
};

export default Logo