"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import Link from 'next/link';
import Image from 'next/image';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu open/close state
  function toggleMenu (){
    setIsOpen(!isOpen);
  };

  function randomColor(){
    const colors = ["bg-emerald-800"];
    const randomIdx = Math.floor(Math.random() * colors.length);
    return colors[randomIdx];
  }

  const navVariants = {
    open: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    },
    closed: {
      transition:{
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  }

  const linkVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  }

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className={`fixed top-8 right-4 z-30 py-2 px-4 bg-[#f7f7f7] text-black rounded-full
        shadow-lg focus:outline-none text-md`}
      >
        {isOpen ? <IoClose/> : <RxHamburgerMenu/>}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Sliding Menu */}
            <motion.div
              className={`fixed top-0 right-0 w-[80vw] md:w-[480px] h-full bg-emerald-800
              text-white p-8 flex flex-col justify-between z-20 shadow-lg rounded-l-lg align-center`}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Navigation Links */}
              <nav className="flex flex-col gap-8 mt-16">
                <motion.div variants={navVariants} className="space-y-8 flex flex-col text-lg md:text-3xl">
                  <Link href="/" className="hover:text-violet-300 transition font-semibold" onClick={toggleMenu}>
                    Home
                  </Link>
                  <Link href="/about" className="hover:text-violet-300 transition font-semibold" onClick={toggleMenu}>
                    About
                  </Link>
                  <Link href="/projects" className="hover:text-violet-300 transition font-semibold" onClick={toggleMenu}>
                    Projects
                  </Link>
                  <Link href="/contact" className="hover:text-violet-300 transition font-semibold" onClick={toggleMenu}>
                    Contact
                  </Link>
                </motion.div>
              </nav>
              {/* Footer Links */}
              <div className="flex flex-wrap gap-2 mt-auto pt-8 border-t border-white/30">
              <p>Bleeding Heart Studios</p>
              </div>
            </motion.div>

            {/* Background Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={toggleMenu} // Close menu when clicking outside
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
