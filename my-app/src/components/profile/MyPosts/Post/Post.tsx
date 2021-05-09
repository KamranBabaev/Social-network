import React from "react";
import styles from './Post.module.css'
import likeIcon from './heart.png'
import avaPhoto from './ddd.jpg'

export type PostPropsType = {
    id: number;
    message: string;
    likeCounts: number;
}

const Post = (props: PostPropsType) => {
    return (
        <div className={styles.posts}>
            <div className={styles.post}>
                <img className={styles.postAvatar}
                    src={avaPhoto} alt="avatar"/>
                {props.message}
            </div>
            <div className={styles.like}>
                <span>
                    <img src={likeIcon}/>
                    {props.likeCounts}
                </span>
            </div>
        </div>
    )
}

export default Post;