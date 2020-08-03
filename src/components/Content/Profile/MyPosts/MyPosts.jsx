import React from "react";
import s from "./MyPosts.module.css";
import Post from "../../../Items/Posts/Post/Post";


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

const MyPosts = () => {
    return (
        <div>
            <div className={s.postArea}>
                <Post
                    article={postData[0].article}
                    body={postData[0].body}
                    likes={postData[0].likes}
                    author={postData[0].author}
                    pic={postData[0].pic}
                />
                <Post
                    article={postData[1].article}
                    body={postData[1].body}
                    likes={postData[1].likes}
                    author={postData[1].author}
                    pic={postData[1].pic}
                />

            </div>
        </div>
    );
};

export default MyPosts