'use client';
import Gallery from '../Gallery/Gallery';
import { useEffect } from 'react';
import { useSpring } from 'framer-motion';
import Lenis from 'lenis';

const projects = [
  {
    name: "doves",
    handle: "1"
  },
  {
    name: "fruit doves",
    handle: "2"
  },
];

export default function ImageGalleryHover() {

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time){
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf)
  }, []);

  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1
  }

  const mousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring)
  }

  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    const targetX = clientX - (window.innerWidth / 2 * 0.25);
    const targetY = clientY - (window.innerWidth / 2 * 0.30);

    mousePosition.x.set(targetX);
    mousePosition.y.set(targetY);
  }

  return (
    <main onMouseMove={mouseMove}>
      {
        projects.map(({handle}, i) => {
          return <Gallery mousePosition={mousePosition} handle={handle} key={i} />
        })
      }
    </main>

  );
}
