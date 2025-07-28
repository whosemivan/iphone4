import Image from "next/image";
import styles from "./styles.module.scss";


export default function YTApp() {

    return (
        <Image
            src="/ytInterface.jpg"
            width={272}
            height={388}
            alt="YouTube"
        />
    );
}
