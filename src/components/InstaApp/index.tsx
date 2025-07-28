import Image from "next/image";
import styles from "./styles.module.scss";


export default function InstaApp() {

    return (
        <div className={styles.app}>
            <div className={styles.topPanel}>
                <h2 className={styles.accountName}>.SOLUTIONS</h2>
                <button type="button" className={styles.settingsButton}>
                    <span className="visually-hidden">Settings</span>
                </button>
            </div>

            <div className={styles.infoPanel}>
                <div className={styles.avatarPanel}>
                    <div className={styles.avatarBlock}>
                        <Image
                            className={styles.avatar}
                            src="/avatar.jpg"
                            width={61}
                            height={61}
                            alt="avatar"
                        />
                    </div>
                    <div className={styles.profile}>
                        <div className={styles.stats}>
                            <div className={styles.stat}>
                                <strong>3</strong>
                                <span>photos</span>
                            </div>
                            <div className={styles.stat}>
                                <strong>1K</strong>
                                <span>followers</span>
                            </div>
                            <div className={styles.stat}>
                                <strong>0</strong>
                                <span>following</span>
                            </div>
                        </div>

                        <button className={styles.editBtn}>
                            <span>Edit Your Profile</span>
                            <span className={styles.chevron}>&rsaquo;</span>
                        </button>
                    </div>
                </div>
                <div className={styles.statusPanel}>
                    <span>✌🏻✌🏻</span>
                </div>
            </div>

            <div className={styles.toggle}>
                <button type="button" className={styles.button}>
                    <span className="visually-hidden">First mode</span>
                </button>
                <button type="button" className={styles.button}>
                    <span className="visually-hidden">Second mode</span>
                </button>
                <button type="button" className={styles.button}>
                    <span>Photo Map</span>
                    <span className={styles.chevron}>&rsaquo;</span>
                </button>
            </div>


            <div className={styles.posts}>
                <div className={styles.post}>
                    <Image
                        className={styles.postImage}
                        src="/post.jpg"
                        width={84}
                        height={84}
                        alt="Post"
                    />
                </div>
                <div className={styles.post}>
                    <Image
                        className={styles.postImage}
                        src="/post2.jpg"
                        width={84}
                        height={84}
                        alt="Post"
                    />
                </div>
                <div className={styles.post}>
                    <Image
                        className={styles.postImage}
                        src="/post3.jpg"
                        width={84}
                        height={84}
                        alt="Post"
                    />
                </div>
            </div>

            <Image
                className={styles.bottomPanel}
                src="/instBottomPanel.jpg"
                width={272}
                height={38}
                alt="Panel"
            />
        </div>
    );
}
