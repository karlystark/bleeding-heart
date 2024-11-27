"use client";
import {motion, useViewportScroll, useTransform} from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';

export default function Logo(){

// Get the current scroll position
const { scrollY } = useViewportScroll();

// Map the scroll position to a rotation value
const rotate = useTransform(scrollY, [0, 500], [0, 360]);

    return (
        <Link href="/">
        <div className="Logo hover:scale-105  transition-transform m-4 flex">
            <motion.div style={{ rotate }}>
            <Image className="w-16 h-16 lg:w-24 lg:h-24" src="/bleedingheart.png" alt="bleeding heart pigeon" height="100" width="100" />
            </motion.div>
            <Image className="hidden lg:block self-center" src="/bleedinghearttext3.png" alt="bleeding heart text" height="50" width="300" />
        </div>
        </Link>
    )
}