import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Messege/Message";
import MyMessage from "./MyMessage/MyMessage";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {

    let dialogs = props.dialogData.map(d => <DialogItem nickName={d.nick} idName={d.idPersonal}/>);

    let messages = props.messageData.map(m => m.idPersonal === 10000001 ?
        <Message message={m.message} date={m.date}/> :
        <MyMessage message={m.message} date={m.date}/>
    )

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