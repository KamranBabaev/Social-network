import React from "react";
import styles from './MyPosts.module.css'
import Post, {PostPropsType} from "./Post/Post";

export type MyPostsPropsType = {
    posts: Array<PostPropsType>
}


const MyPosts = (props: MyPostsPropsType) => {

    let postElements = props.posts.map(p => <Post message={p.message} likeCounts={p.likeCounts} id={p.id}/>)

    return (
        <div className={styles.allMyPosts}>
            <h3>Мои записи</h3>
            <div className={styles.MyPosts}>
                <textarea></textarea>
                <button>создать</button>
                <button>удалить</button>
            </div>
            <div className={styles.Posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;