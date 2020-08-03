import React from "react";
import s from "./Status.module.css";

const Status = (props) => {
    return (
        <div className={s.status}>
            {props.status}
        </div>
    );
};

export default Status