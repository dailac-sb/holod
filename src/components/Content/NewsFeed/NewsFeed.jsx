import React from "react";
import s from "./NewsFeed.module.css";
import Post from "../../ContentItems/Posts/Post/Post";
import NewPost from "../../ContentItems/Posts/NewPost/NewPost";

const NewsFeed = (props) => {

    let post = props.newsData.postData.map(p => (
        <Post id={p.id} article={p.article} body={p.body} likes={p.likes} author={p.author} pic={p.pic}/>
    ))

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