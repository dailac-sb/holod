import React from "react";
import s from "./Profile.module.css";
import MyRecipes from "./MyRecipes/MyRecipes";
import MyPosts from "./MyPosts/MyPosts";
import Subs from "./MySub/Subs";
import Personal from "./Personal/Personal";

const Profile = (props) => {
    return (
        <div>
            <Personal profile={props.profileData.profile}/>
            <Subs
                subscription={props.profileData.subscription}
                subscribers={props.profileData.subscribers}
            />
            <MyRecipes/>
            <MyPosts myPostData={props.profileData.myPostData}/>
        </div>
    );
};

export default Profile
