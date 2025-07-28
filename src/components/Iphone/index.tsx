'use client';

import Image from "next/image";
import styles from "./styles.module.scss";
import {useEffect, useState} from 'react';
import {getFormattedTime} from '@/utils';
import Icon from '@/components/Icon/index';
import AppScreen from '@/components/AppScreen/index';

export default function Iphone() {
    const [time, setTime] = useState(getFormattedTime());
    const [openedApp, setOpenedApp] = useState<string | null>(null);

    const handleOpenApp = (appName: string) => {
        setOpenedApp(appName);
    };

    const handleCloseApp = () => {
        setOpenedApp(null);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getFormattedTime());
        }, 60000); // every minute

        // update once on mount in case seconds passed
        setTime(getFormattedTime());

        return () => clearInterval(interval);
    }, []);


    return (
        <div className={styles.block}>
            <div className={styles.box}>
                <div className={styles.screen}>
                    <div className={styles.topPanel}>
                        <span className={styles.net}>3G</span>
                        <span className={styles.time}>{time}</span>
                        <span className={styles.charger}></span>
                    </div>
                    {/* wallpaper */}
                    <Image
                        className={styles.wallpaper}
                        src="/solutionscreen.jpg"
                        width={272}
                        height={408}
                        alt="wallpaper"
                    />

                    <div className={styles.iconsTable}>
                        <Icon image="/icons/photo.svg" name="Photos" isMenu={false} onClick={handleOpenApp}/>
                        <Icon image="/icons/solutions.svg" name=".Solutions" isMenu={false} />
                        <Icon image="/icons/instagram.svg" name="Instagram" isMenu={false} onClick={handleOpenApp}/>
                        <Icon image="/icons/spotify.svg" name="Spotify" isMenu={false} onClick={handleOpenApp}/>
                        <Icon image="/icons/appstore.svg" name="AppStore" isMenu={false} onClick={handleOpenApp}/>
                        <Icon image="/icons/yt.svg" name="YouTube" isMenu={false} onClick={handleOpenApp}/>
                    </div>

                    <div className={styles.bottomPanel}>
                        <Icon image="/icons/phone.svg" name="Phone" isMenu={true}/>
                        <Icon image="/icons/iPod.svg" name="iPod" isMenu={true}/>
                        <Icon image="/icons/notes.svg" name="Notes" isMenu={true}/>
                        <Icon image="/icons/camera.svg" name="Camera" isMenu={true}/>
                    </div>

                    {openedApp && <AppScreen appName={openedApp} />}
                </div>

                <button type="button" className={styles.closeBtn} onClick={() => handleCloseApp()}>
                    <span className="visually-hidden">Close</span>
                </button>
            </div>
        </div>
    );
}
