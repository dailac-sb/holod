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
            <table>
                <tr>
                    <td>
                        <Logo/>
                    </td>
                    <td>
                        <Name/>
                    </td>
                    <td>
                        <Navbar/>
                    </td>
                    <td>
                        <Search/>
                    </td>
                    <td>
                        <Login/>
                    </td>
                </tr>
            </table>
        </header>
    );
};

export default Header