import React from "react";
import s from "./Header.module.css";
import Logo from "./Logo/Logo";
import Name from "./Name/Name";
import Search from "./Search/Search";
import Navbar from "./Navbar/Navbar";
import Login from "./Login/Login";

const Header = () => {
    return (
        <header className={s.header}>
            <div>
                <Logo/>
            </div>
            <div>
                <Name/>
            </div>
            <div>
                <Navbar/>
            </div>
            <div>
                <Search/>
            </div>
            <div>
                <Login/>
            </div>
        </header>
    );
};

export default Header