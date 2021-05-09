import React from "react";
import styles from './MyPosts.module.css'
import Post from "./Post/Post";

export type MyPostsPropsType = {
    likeCounts: number;
    id: number;
    message: string;
}

export type PostDataPropsType = {
    id: number;
    message: string;
    likeCounts: number;
}


const MyPosts = (props: MyPostsPropsType) => {

    let PostData = [
        {id: 1, message: 'Привет, как ты?', likeCounts: 11},
        {id: 2, message: 'Что сейчас учишь?', likeCounts: 19},
        {id: 3, message: 'Захвати пиццу по пути', likeCounts: 26},
    ]

    return (
        <div className={styles.allMyPosts}>
            <h3>Мои записи</h3>
            <div className={styles.MyPosts}>
                <textarea></textarea>
                <button>создать</button>
                <button>удалить</button>
            </div>
            <div className={styles.Posts}>
                <Post message={PostData[0].message}
                      likeCounts={PostData[0].likeCounts}
                      id={PostData[0].id}/>
            </div>
        </div>
    )
}

export default MyPosts;