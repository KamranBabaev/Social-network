import React from "react";
import styles from './MyPosts.module.css'
import Post from "./Post/Post";

export type MyPostsPropsType = {
    message: string;
    likeCounts: number;
}
const MyPosts = () => {
    return (
        <div className={styles.allMyPosts}>
            Мои записи
            <div className={styles.MyPosts}>
                <textarea></textarea>
                <button>создать</button>
                <button>удалить</button>
            </div>
            <div className={styles.Posts}>
                <Post message='Привет, как ты?' likeCounts={11}/>
                <Post message='Что сейчас учишь?' likeCounts={11}/>
            </div>
        </div>
    )
}

export default MyPosts;