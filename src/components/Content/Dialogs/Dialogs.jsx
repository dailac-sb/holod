import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Messege/Message";
import MyMessage from "./MyMessage/MyMessage";
import DialogItem from "./DialogItem/DialogItem";
import NewMessage from "./NewMessage/NewMessage";

const Dialogs = (props) => {

    let dialogs = props.dialogsData.dialogs.map(d => <DialogItem nickName={d.nick} idName={d.idPersonal}/>);

    let messages = props.dialogsData.messageData.map(m => m.idPersonal === 10000001 ?
        <MyMessage message={m.message} date={m.date}/> :
        <Message message={m.message} date={m.date}/>
    )

    return (
        <div className={s.wrap}>
            <div className={s.dialogs}>
                {dialogs}
            </div>
            <div className={s.message}>
                {messages}
                <NewMessage addMessage={props.addMessage}/>
            </div>
        </div>
    );
};

export default Dialogs