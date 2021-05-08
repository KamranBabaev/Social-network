import React from "react";
import styles from './Post.module.css'

const Post = () => {
    return (
        <div className={styles.post}>
            <img
                src="https://cdn23.img.ria.ru/images/148839/96/1488399659_0:0:960:960_600x0_80_0_1_e38b72053fffa5d3d7e82d2fe116f0b3.jpg"
                alt="avatar"/>
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post;