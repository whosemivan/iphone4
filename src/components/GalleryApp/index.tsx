import Image from "next/image";

export default function GalleryApp() {

    return (
        <Image
            src="/galleryInterface.jpg"
            width={272}
            height={388}
            alt="Photos"
        />
    );
}
