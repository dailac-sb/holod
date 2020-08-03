import React from "react";
import s from "./Post.module.css";


const Post = (props) => {
    return (
        <div className={s.postBlock}>
            <div className={s.postImg}>
                <img className={s.postPic}
                     src={props.pic}
                     alt=""/>
                <div className={s.postArticle}><h3>{props.article}</h3></div>
                <div className={s.postBody}>{props.body}</div>
                <div className={s.postLikes}>{props.likes} Likes</div>
                <div className={s.postAuthor}>{props.author}</div>
            </div>

        </div>
    );
};

export default Post