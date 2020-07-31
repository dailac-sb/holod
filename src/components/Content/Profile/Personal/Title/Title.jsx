import React from "react";
import s from "./Tilte.module.css";

const Title = () => {
    return (
        <div>
            <img className={s.title_profile}
                 src="https://avatars.mds.yandex.net/get-pdb/1822443/efedf570-1e49-41ca-b2f1-e30625326a53/s1200?webp=false"
                 alt="title"/>
        </div>
    );
};

export default Title