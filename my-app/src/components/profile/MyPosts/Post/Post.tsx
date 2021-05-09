import React from "react";
import styles from './Post.module.css'
import {MyPostsPropsType} from "../MyPosts";
import likeIcon from './heart.png'

const Post = (props: MyPostsPropsType) => {
    return (
        <div className={styles.posts}>
            <div className={styles.post}>
                <img className={styles.postAvatar}
                    src="https://cdn23.img.ria.ru/images/148839/96/1488399659_0:0:960:960_600x0_80_0_1_e38b72053fffa5d3d7e82d2fe116f0b3.jpg"
                    alt="avatar"/>
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