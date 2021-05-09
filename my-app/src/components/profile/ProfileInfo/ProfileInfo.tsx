import React from "react";
import styles from './ProfileInfo.module.css'
import contentPhoto from './contetnPhoto.jpg'


const ProfileInfo = () => {
    return (
        <div className={styles.profileInfo}>
            <div>
                <img
                    src={contentPhoto}
                    alt=""/>
            </div>
            <div className={styles.description}>
                ava+ description
            </div>
        </div>
    )
}

export default ProfileInfo;