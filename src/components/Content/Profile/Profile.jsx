import React from "react";
import s from "./Profile.module.css";
import MyRecipes from "./MyRecipes/MyRecipes";
import MyPosts from "./MyPosts/MyPosts";
import Subs from "./MySub/Subs";
import Personal from "./Personal/Personal";

const Profile = (props) => {
    return (
        <div>
            <Personal profile={props.profile}/>
            <Subs
                subscription={props.subscription}
                subscribers={props.subscribers}
            />
            <MyRecipes/>
            <MyPosts myPostData={props.myPostData}/>
        </div>
    );
};

export default Profile
