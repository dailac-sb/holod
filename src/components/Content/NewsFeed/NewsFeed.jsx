import React from "react";
import s from "./NewsFeed.module.css";
import Post from "../../Items/Posts/Post/Post";
import NewPost from "../../Items/Posts/NewPost/NewPost";

let postData = [
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

let post = postData.map ( p => (
    <Post id={p.id} article={p.article} body={p.body} likes={p.likes} author={p.author} pic={p.pic} />
))


const NewsFeed = () => {
    return (
        <div>
            <NewPost/>
            <div className={s.postArea}>
                    {post}
            </div>
        </div>
    );
};


export default NewsFeed