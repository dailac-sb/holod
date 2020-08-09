import React from "react";
import s from "./Subs.module.css";
import Sub from "../../../ContentItems/Sub/Sub";

const Subs = (props) => {
    let subscrip = props.subscription.map(sp => (
            <div>
                <Sub nick={sp.nick} avatar={sp.avatar}/>
            </div>
        )
    );
    let subscrib = props.subscribers.map(sp => (
            <div>
                <Sub nick={sp.nick} avatar={sp.avatar}/>
            </div>
        )
    );

    return (
        <div>
            <div>
                <div className={s.head}>Мои подписки:</div>
                <div className={s.sBlock}>{subscrip}</div>
            </div>
            <div>
                <div className={s.head}>Мои подписчики:</div>
                <div className={s.sBlock}>{subscrib}</div>
            </div>
        </div>
    );
};

export default Subs