import React from "react";
import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import contentPhoto from './contetnPhoto.jpg'


const Profile = () => {
    return (
        <div className={styles.profile}>
            <div>
                <img
                    src={contentPhoto}
                    alt=""/>
            </div>
            <div>
                ava+ description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;