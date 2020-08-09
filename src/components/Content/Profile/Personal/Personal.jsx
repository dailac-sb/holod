import React from "react";
import s from "./Personal.module.css";
import Title from "./Title/Title";
import Description from "./Description/Description";
import Avatar from "./Avatar/Avatar";
import Status from "./Status/Status";

const Personal = (props) => {

    return (
        <div className={s.personal}>
            <div className={s.titles}>
                <Title urlTitle={props.profile.urlTitle}/>
            </div>
            <div className={s.avatar}>
                <Avatar avatar={props.profile.avatar}/>
            </div>
            <div className={s.description}>
                <Description nickName={props.profile.nickName}
                             firstName={props.profile.firstName}
                             lastName={props.profile.lastName}
                             birthday={props.profile.birthday}
                             homeCity={props.profile.homeCity}
                             aboutMe={props.profile.aboutMe}/>
                <Status status={props.profile.status}/>
            </div>
        </div>
    );
};

export default Personal