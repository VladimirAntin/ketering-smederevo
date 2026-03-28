'use client';
import {useEffect, useState} from 'react';
import {motion, useScroll} from 'framer-motion';

export default function ScrollProgress() {
  const {scrollYProgress} = useScroll();
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const nav = document.querySelector('nav');
    if (!nav) return;

    const observer = new ResizeObserver(([entry]) => {
      setNavHeight(entry.contentRect.height);
    });

    observer.observe(nav);
     
    setNavHeight(nav.getBoundingClientRect().height);

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        transformOrigin: '0%',
        position: 'fixed',
        top: navHeight,
        left: 0,
        right: 0,
        height: 4,
        background: '#9FCCDF',
        zIndex: 9999,
      }}
    />
  );
}
