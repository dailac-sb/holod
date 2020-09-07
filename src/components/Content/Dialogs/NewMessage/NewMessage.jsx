import React from "react";
import s from "./NewMessage.module.css";

const NewMessage = (props) => {

    let newMessageElement = React.createRef();

    let newMessage = () => {
        let text = newMessageElement.current.value;
        props.addMessage(text);
        newMessageElement.current.value = '';
    }

    return (
        <div className={s.message}>
            <input className={s.text} ref={newMessageElement} type="text"/>
            <button className={s.button} onClick={newMessage}>отправить</button>
        </div>
    );
};

export default NewMessage