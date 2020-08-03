import React from "react";
import s from "./Subs.module.css";
import Sub from "../../../Items/Sub/Sub";


let subscription = [
    {
        nick: 'Человек Мужик',
        avatar: 'https://pbs.twimg.com/profile_images/926488420645523456/hwKSfqNj.jpg',
    },
    {
        nick: 'Kathrin',
        avatar: 'https://im0-tub-ru.yandex.net/i?id=0153a3ac6e940736f8f149c8087260e4&n=13&exp=1',
    },
    {
        nick: 'Леха Борода',
        avatar: 'https://i02.fotocdn.net/s115/4ded166df3559998/user_xl/2625182518.jpg',
    },
];

let subscrip = subscription.map(sp => (
        <div>
            <Sub nick={sp.nick} avatar={sp.avatar}/>
        </div>
    )
);

let subscribers = [
    {
        nick: 'Человек-паук',
        avatar: 'https://img2.akspic.ru/image/14337-vozdushnyj_shar-windsports-parashyut-vozdushnye_vidy_sporta-risovanie-1920x1200.jpg',
    },
    {
        nick: 'Железный человек',
        avatar: 'https://fsb.zobj.net/crop.php?r=ioR76-8miOq5igdb_Y-PrQrk6Qo9MzbkJm7mTdKJq_osFRjG3U_DaRfFpIEx2OwEVk5V6VNFSkinVlxGHB9b1r1QWNV7jtMjskJaeRVf2oUdyQzmnRxCNMNgbHn_hCL28n8i9h6Q6R5bcHRg',
    },
    {
        nick: 'Человек Мужик',
        avatar: 'https://pbs.twimg.com/profile_images/926488420645523456/hwKSfqNj.jpg',
    },
    {
        nick: 'Kathrin',
        avatar: 'https://im0-tub-ru.yandex.net/i?id=0153a3ac6e940736f8f149c8087260e4&n=13&exp=1',
    },
    {
        nick: 'Жижа салатная',
        avatar: 'https://img.povar.ru/uploads/7a/fc/93/d3/salat_quotna_dachequot-220103.jpg',
    },
];

let subscrib = subscribers.map(sp => (
        <div>
            <Sub nick={sp.nick} avatar={sp.avatar}/>
        </div>
    )
);

const Subs = () => {
    return (
        <div>
            <div>
                <div className={s.head}>Мои подписки:</div>
                <div  className={s.sBlock}>{subscrip}</div>
            </div>
            <div>
                <div className={s.head}>Мои подписчики:</div>
                <div  className={s.sBlock}>{subscrib}</div>
            </div>
        </div>
    );
};

export default Subs