import React from "react";
import s from "./Logo.module.css";

const Logo = () => {
    return (
        <div className={s.logo}>
            <a href="#home">
                <img
                    src="https://yt3.ggpht.com/a/AATXAJxhmzNF0YsviPxA6P6Kqa-vC1pRTqz0c3K7UA=s900-c-k-c0xffffffff-no-rj-mo"
                    alt=""/>
            </a>
        </div>

    );
};

export default Logo