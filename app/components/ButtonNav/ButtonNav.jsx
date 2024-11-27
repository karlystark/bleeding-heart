"use client";

import React, { useEffect, useState } from 'react';
// import { usePathname } from 'next/navigation';
// import { motion, AnimatePresence } from 'framer-motion';
import ColorSwitchButton from '../ColorSwitchButton/ColorSwitchButton';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';


const links = ["About", "Projects", "Contact"];

export default function ButtonNav() {
    // const pathname = usePathname();
    // const isLandingPage = pathname === '/';
    // const [showNavbar, setShowNavbar] = useState(!isLandingPage);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const updateNav = () => {
            setIsMobile(window.innerWidth < 1024); // Tailwind's lg breakpoint
        };

        updateNav(); // Run on initial render
        window.addEventListener('resize', updateNav);

        return () => window.removeEventListener('resize', updateNav);
    }, []);


    // useEffect(() => {
    //     if (!isLandingPage) return;

    //     const handleScroll = () => {
    //         const heroHeight = document.querySelector('.hero')?.offsetHeight || 0;
    //         setShowNavbar(window.scrollY > heroHeight);
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, [isLandingPage]);

    return (
        <div className="nav">
                <div
                    className="ButtonNav flex justify-between sticky top-0 z-50 px-4 bg-[var(--background)]
                    bg-opacity-0">
                    <Logo className="align-center" />
                    { isMobile
                    ?
                    <Menu />
                    :
                        <nav className="Nav-links flex justify-end self-center space-x-2">
                            {links.map((link, idx) => (
                                <ColorSwitchButton text={link} key={idx} border={false} color={"bg-[#68248c]"}
                                link={link.toLowerCase()} />
                            ))}
                            </nav>
                    }
                </div >
            </div>
    );
}

