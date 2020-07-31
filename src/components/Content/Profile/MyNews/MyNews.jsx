import React from "react";
import s from "./MyNews.module.css";
import CreateNews from "./CreateNews/CreateNews";

const MyNews = () => {
    return (
        <div>
            <CreateNews/>
            Новости
        </div>
    );
};

export default MyNews