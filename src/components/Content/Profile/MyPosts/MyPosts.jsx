import React from "react";
import s from "./MyPosts.module.css";
import Post from "../../../ContentItems/Posts/Post/Post";

const MyPosts = (props) => {

    let post = props.myPostData.map(p => (
        <Post id={p.id} article={p.article} body={p.body} likes={p.likes} author={p.author} pic={p.pic}/>
    ))

    return (
        <div>
            <div className={s.postArea}>
                {post}
            </div>
        </div>
    );
};

export default MyPosts