import React from "react";
import s from "./Profile.module.css";
import MyRecipes from "./MyRecipes/MyRecipes";
import MyNews from "./MyNews/MyNews";
import Sub from "./MySub/Sub";
import Personal from "./Personal/Personal";

const Profile = () => {
    return (
        <div>
            <Personal/>
            <MyRecipes/>
            <MyNews/>
            <Sub/>
        </div>
    );
};

export default Profile