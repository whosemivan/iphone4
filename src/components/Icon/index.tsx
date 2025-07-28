import Image from "next/image";
import styles from "./styles.module.scss";

interface IconProps {
    image: string;
    name: string;
    isMenu: boolean;
    onClick?: (appName: string) => void;
};
export default function Icon({image, name, isMenu, onClick}: IconProps) {

    const onIconClick = () => {
        if (name === '.Solutions' || !onClick) {
            window.location.href = 'https://gleb.solutions/'
        } else {
            onClick(name)
        }
    };

    return (
        <button type="button" className={styles.iconBtn} onClick={() => onIconClick()}>
            <Image
                src={image}
                width={48}
                height={isMenu ? 65 : 47}
                alt={name}
            />
            <span className={isMenu ? styles.menuText : ""}>{name}</span>
        </button>
    );
}
