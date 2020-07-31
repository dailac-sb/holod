import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Messege/Message";
import MyMessage from "./MyMessage/MyMessage";
import Contact from "./Contact/Contact";

const Dialogs = () => {
    return (
        <div>
            <table>
                <tr>
                    <td className={s.dialogs}>
                        <Contact nickName="Kathrin"/>
                        <Contact nickName="Maxim Bychkov"/>
                        <Contact nickName="Станислав Мартовченко"/>
                    </td>
                    <td className={s.message}>
                        <Message message="Привет, как дела?" time="10:55"/>
                        <MyMessage message="Привет, супер продолжаем монтаж. Погода огонь!" time="11:21"/>
                        <Message message="Когда планируешь домой? " time="11:28"/>
                    </td>
                </tr>
            </table>

        </div>
    );
};

export default Dialogs