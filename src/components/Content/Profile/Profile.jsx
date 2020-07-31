import React from "react";
import s from "./Profile.module.css";

const Profile = () => {
    return (
        <div>
            <img className={s.title_profile}
                 src="https://avatars.mds.yandex.net/get-pdb/1822443/efedf570-1e49-41ca-b2f1-e30625326a53/s1200?webp=false"
                 alt="title"/>
            <div>avatar + description</div>
            <div>My status</div>
            <div>My recipes</div>
            <div>My posts</div>
            <div>Subscriptions and subscribers</div>
        </div>
    );
};

export default Profile