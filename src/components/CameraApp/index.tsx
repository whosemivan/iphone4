'use client';

import styles from "./styles.module.scss";
import {useEffect, useRef, useState} from 'react';
import Image from "next/image";

export default function CameraApp() {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const streamRef = useRef<MediaStream | null>(null); // <== stream хранится тут
    const [cameraAvailable, setCameraAvailable] = useState(true);

    useEffect(() => {
        const getCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({video: true});
                streamRef.current = stream; // сохраняем
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
                setCameraAvailable(true);
            } catch (err) {
                setCameraAvailable(false);
            }
        };

        getCamera();

        return () => {
            // выключаем камеру
            if (streamRef.current) {
                streamRef.current.getTracks().forEach(track => track.stop());
            }
        };
    }, []);

    return (
        <div className={styles.cameraApp}>
            {cameraAvailable ? (
                <video
                    ref={el => {
                        videoRef.current = el;
                    }}
                    autoPlay
                    playsInline
                    muted
                    className={styles.video}
                />
            ) : (
                <Image
                    src="/VIPVK.jpg"
                    width={272}
                    height={408}
                    alt="Камера недоступна"
                    className={styles.video}
                />
            )}
        </div>
    );
}
