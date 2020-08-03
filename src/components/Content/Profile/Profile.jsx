import React from "react";
import s from "./Profile.module.css";
import MyRecipes from "./MyRecipes/MyRecipes";
import MyPosts from "./MyPosts/MyPosts";
import Subs from "./MySub/Subs";
import Personal from "./Personal/Personal";

const Profile = () => {
    return (
        <div>
            <Personal/>
            <Subs/>
            <MyRecipes/>
            <MyPosts/>
        </div>
    );
};

export default Profile