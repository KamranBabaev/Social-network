import React from "react";
import styles from './MyPosts.module.css'
import Post, {PostPropsType} from "./Post/Post";

export type MyPostsPropsType = {
    posts: Array<PostPropsType>
    addPost: (postMessage: any) => void
}

const MyPosts = (props: MyPostsPropsType) => {

    let postElements = props.posts.map(p => <Post message={p.message} likeCounts={p.likeCounts} id={p.id}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        let text = newPostElement.current?.value
        props.addPost(text)
    }

    return (
        <div className={styles.allMyPosts}>
            <h3>Мои записи</h3>
            <div className={styles.MyPosts}>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>создать</button>
                    <button>удалить</button>
                </div>
            </div>
            <div className={styles.Posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;