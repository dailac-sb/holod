import React from "react";
import s from "./Personal.module.css";
import Title from "./Title/Title";
import Description from "./Description/Description";
import Avatar from "./Avatar/Avatar";
import Status from "../Status/Status";

const Personal = () => {
    return (
        <div>
            <Title/>
            <div>
                <table className={s.personal}>
                    <tr>
                        <td className={s.avatar}>
                            <Avatar/>
                        </td>
                        <td className={s.description}>
                            <Description nickName="Dailac" firstName="Сергей" lastName="Байдалов" birthday="11.07.1989"
                                         homeCity="Moskow"
                                         aboutMe="Веселый жизнерадостный человек, с позитивом шагающий по миру."/>
                            <Status/>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default Personal