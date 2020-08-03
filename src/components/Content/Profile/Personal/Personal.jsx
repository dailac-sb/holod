import React from "react";
import s from "./Personal.module.css";
import Title from "./Title/Title";
import Description from "./Description/Description";
import Avatar from "./Avatar/Avatar";
import Status from "./Status/Status";

let personalData = [
        {
            nickName: 'Dailac',
            firstName: 'Сергей',
            lastName: 'Байдалов',
            birthday: '11.07.1989',
            homeCity: 'Moskow',
            aboutMe: 'Веселый жизнерадостный человек, с позитивом шагающий по миру.',
            status: 'Я счаслив!!!',
        }
    ]
;

const Personal = () => {
    return (
        <div className={s.personal}>
            <div className={s.titles}>
                <Title/>
            </div>
            <div className={s.avatar}>
                <Avatar/>
            </div>
            <div className={s.description}>
                <Description nickName={personalData[0].nickName}
                             firstName={personalData[0].firstName}
                             lastName={personalData[0].lastName}
                             birthday={personalData[0].birthday}
                             homeCity={personalData[0].homeCity}
                             aboutMe={personalData[0].aboutMe}/>
                <Status status={personalData[0].status}/>
            </div>
        </div>
    );
};

export default Personal