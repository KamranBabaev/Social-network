import React from "react";
import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostPropsType} from "./MyPosts/Post/Post";

export type ProfilePropsType = {
    posts: Array<PostPropsType>
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={styles.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}

export default Profile;