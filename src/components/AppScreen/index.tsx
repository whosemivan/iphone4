import styles from "./styles.module.scss";
import {motion, AnimatePresence} from "framer-motion";
import InstaApp from "@/components/InstaApp";
import SpotifyApp from "@/components/SpotifyApp";
import AppStoreApp from "@/components/AppStore";
import YTApp from "@/components/YTApp";
import GalleryApp from "@/components/GalleryApp";
import CameraApp from "@/components/CameraApp";
import {JSX} from "react";

export default function AppScreen({appName}: { appName: string }) {

    const renderApp = (appName: string): JSX.Element => {
        switch (appName) {
            case 'Instagram':
                return <InstaApp />;
            case 'Spotify':
                return <SpotifyApp />;
            case 'AppStore':
                return <AppStoreApp />;
            case 'YouTube':
                return <YTApp />;
            case 'Photos':
                return <GalleryApp />;
            case 'Camera':
                return <CameraApp />;
            default:
                return <div>App not found: {appName}</div>;
        }
    }

    return (
        <AnimatePresence>
            <motion.div
                className={styles.appScreen}
                initial={{scale: 0.8, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                exit={{scale: 0.8, opacity: 0}}
                transition={{duration: 0.3}}
            >
                {
                    renderApp(appName)
                }
            </motion.div>
        </AnimatePresence>
    );
}
