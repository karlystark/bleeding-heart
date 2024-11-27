"use client";
import dynamic from 'next/dynamic';

// Dynamically import ReactPlayer and disable SSR
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

// import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {

    return (
        <div className="Hero">
            <div className="video-container">
                <ReactPlayer
                    url="/meow.mp4"
                    width="100%"
                    autoPlay={true}
                    muted={true}
                    volume={0}
                    loop={true}
                    height="100%"
                />
            </div>
        </div>
    );
}