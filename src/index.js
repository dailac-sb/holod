import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let profileData = {
    nickName: 'Dailac',
    firstName: 'Сергей',
    lastName: 'Байдалов',
    birthday: '11.07.1989',
    homeCity: 'Moskow',
    aboutMe: 'Веселый жизнерадостный человек, с позитивом шагающий по миру.',
    status: 'Я счаслив!!!',
    urlTitle: "https://avatars.mds.yandex.net/get-pdb/1822443/efedf570-1e49-41ca-b2f1-e30625326a53/s1200?webp=false",
    avatar: "https://i12.fotocdn.net/s124/02b97628f471a881/user_l/2821171119.jpg",
};

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

let postDataNews = [
    {
        id: 1,
        article: 'Охота на закат',
        body: 'Снова началась жара, солнце больше не закрывали тучи и утренняя прохлада, вызванная проходом ' +
            'холодного циклона, больше не радовала. Несмотря на сильный ветер и ночной дождь, грозящий срыву ' +
            'работ, все обрадовались небольшой передышке в изматывающих солнечных буднях. Сделав несколько' +
            ' кадров, он решил отдохнуть в прохладном домике, чтобы, уже через несколько часов попытаться' +
            ' поймать в свой объектив красочный закат. Точка была выбрана время сверено с расписанием, осталось' +
            ' только немного подождать...',
        likes: 123,
        author: 'Dailac',
        pic: 'https://avatars.mds.yandex.net/get-pdb/1491599/5627e8e4-79e0-4ffd-835f-f5a2c8f8a6a3/s1200?webp=false'
    },
    {
        id: 3,
        article: 'Кис кис кис',
        body: 'Веселая кошка все время говорит мяу, а чтоб позвать кошку нажно что произнести?',
        likes: 65,
        author: 'Kathrin',
        pic: 'https://zagge.ru/wp-content/uploads/2019/06/aHR0cDovL3d3dy5saXZlc2N.jpg'
    },
    {
        id: 2,
        article: 'Охота за красивым фото',
        body: 'Снова началась жара, солнце больше не закрывали тучи и утренняя прохлада, вызванная проходом ' +
            'холодного циклона, больше не радовала. Несмотря на сильный ветер и ночной дождь, грозящий срыву ' +
            'работ, все обрадовались небольшой передышке в изматывающих солнечных буднях. Сделав несколько' +
            ' кадров, он решил отдохнуть в прохладном домике, чтобы, уже через несколько часов попытаться' +
            ' поймать в свой объектив красочный закат. Точка была выбрана время сверено с расписанием, осталось' +
            ' только немного подождать...',
        likes: 35,
        author: 'Dailac',
        pic: 'https://yandex.ru/images/_crpd/85tMkop74/456e9bxj3mL/Um_RQgo5HuW-eeRR5uGVbHTB_FJFVW8ORnq5ivzZJ6lyb' +
            '-m2xNXcnQsKgLPh1bo_kKajd306J32WlBGXYNwpDxcqFxFf6N80Pqk113A1Qnsm1SvHU9a9zUMo68t-mPWivKcyKp6LxgEXkwqj' +
            '9UK6fhchNKcm4M'
    },
    {
        id: 3,
        article: 'Кис кис кис',
        body: 'Веселая кошка все время говорит мяу, а чтоб позвать кошку нажно что произнести?',
        likes: 65,
        author: 'Kathrin',
        pic: 'https://zagge.ru/wp-content/uploads/2019/06/aHR0cDovL3d3dy5saXZlc2N.jpg'
    },
];

let myPostData = [
    {
        id: 1,
        article: 'Охота на закат',
        body: 'Снова началась жара, солнце больше не закрывали тучи и утренняя прохлада, вызванная проходом ' +
            'холодного циклона, больше не радовала. Несмотря на сильный ветер и ночной дождь, грозящий срыву ' +
            'работ, все обрадовались небольшой передышке в изматывающих солнечных буднях. Сделав несколько' +
            ' кадров, он решил отдохнуть в прохладном домике, чтобы, уже через несколько часов попытаться' +
            ' поймать в свой объектив красочный закат. Точка была выбрана время сверено с расписанием, осталось' +
            ' только немного подождать...',
        likes: 123,
        author: 'Dailac',
        pic: 'https://avatars.mds.yandex.net/get-pdb/1491599/5627e8e4-79e0-4ffd-835f-f5a2c8f8a6a3/s1200?webp=false'
    },
    {
        id: 1,
        article: 'Охота за красивым фото',
        body: 'Снова началась жара, солнце больше не закрывали тучи и утренняя прохлада, вызванная проходом ' +
            'холодного циклона, больше не радовала. Несмотря на сильный ветер и ночной дождь, грозящий срыву ' +
            'работ, все обрадовались небольшой передышке в изматывающих солнечных буднях. Сделав несколько' +
            ' кадров, он решил отдохнуть в прохладном домике, чтобы, уже через несколько часов попытаться' +
            ' поймать в свой объектив красочный закат. Точка была выбрана время сверено с расписанием, осталось' +
            ' только немного подождать...',
        likes: 35,
        author: 'Dailac',
        pic: 'https://yandex.ru/images/_crpd/85tMkop74/456e9bxj3mL/Um_RQgo5HuW-eeRR5uGVbHTB_FJFVW8ORnq5ivzZJ6lyb' +
            '-m2xNXcnQsKgLPh1bo_kKajd306J32WlBGXYNwpDxcqFxFf6N80Pqk113A1Qnsm1SvHU9a9zUMo68t-mPWivKcyKp6LxgEXkwqj' +
            '9UK6fhchNKcm4M'
    }
];

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

ReactDOM.render(
    <React.StrictMode>
        <App
            profile={profileData}
            postDataNews={postDataNews}
            subscription={subscription}
            subscribers={subscribers}
            myPostData={myPostData}
            dialogData={dialogData}
            messageData={messageData}
        />
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
