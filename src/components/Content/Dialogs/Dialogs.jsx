import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Messege/Message";
import MyMessage from "./MyMessage/MyMessage";
import DialogItem from "./DialogItem/DialogItem";

let dialogData = [
    {
        idPersonal: 10000001,
        nick: 'Kathrin',
    },
    {
        idPersonal: 10000002,
        nick: 'Bychkov Max',
    },
    {
        idPersonal: 10000003,
        nick: 'Kristian',
    },
    {
        idPersonal: 10000004,
        nick: 'Человек Мужик',
    },
    {
        idPersonal: 10000005,
        nick: 'Леха Борода',
    }
]

let messageData = [
    {
        idPersonal: 10000001,
        message: 'Привет, как дела?',
        date: '21.07.20 10:55',
    },
    {
        idPersonal: 10000002,
        message: 'Привет, супер продолжаем монтаж. Погода огонь!',
        date: '21.07.20 10:58',
    },
    {
        idPersonal: 10000001,
        message: 'Когда планируешь домой?',
        date: '22.07.20 6:23',
    },
]

let dialogs = dialogData.map (d => <DialogItem nickName={d.nick} idName={d.idPersonal}/> );

let messages = messageData.map (m => m.idPersonal === 10000001 ?
    <Message message={m.message} date={m.date}/> :
    <MyMessage message={m.message} date={m.date}/>
    )

const Dialogs = () => {
    return (
        <div className={s.wrap}>
            <div className={s.dialogs}>
                {dialogs}
            </div>
            <div className={s.message}>
                {messages}
            </div>
        </div>
    );
};

export default Dialogs