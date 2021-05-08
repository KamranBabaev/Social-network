import React from "react";
import styles from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            Мои записи
            <div>
                <textarea></textarea>
                <button>создать</button>
                <button>удалить</button>
            </div>
            <div>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}

export default MyPosts;