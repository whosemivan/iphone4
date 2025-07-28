import Image from "next/image";
import styles from "./styles.module.scss";


export default function SpotifyApp() {

    return (
        <Image
            src="/spotifyInterface.jpg"
            width={272}
            height={388}
            alt="Spotify"
        />
    );
}
