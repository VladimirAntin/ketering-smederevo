'use client';
import {useEffect, useState} from 'react';
import MoonIcon from '@/icons/MoonIcon';
import SunIcon from '@/icons/SunIcon';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(() => {
      const isDarkMode = localStorage.getItem('theme') === 'dark';
      document.documentElement.classList.toggle('dark', isDarkMode);
      return isDarkMode;
    });
  }, []);

  const toggle = () => {
    setIsDark(v => {
      if (!v) {
        localStorage.setItem('theme', 'dark');
        document.documentElement.classList.add('dark');
      } else {
        localStorage.setItem('theme', 'light');
        document.documentElement.classList.remove('dark');
      }
      return !v;
    });
  };

  return (
    <button
      onClick={toggle}
      aria-label={'Toggle dark mode'}
      className={
        'flex items-center justify-center rounded-full p-1 transition-colors duration-200 hover:cursor-pointer hover:bg-white/10'
      }>
      {isDark ? (
        <MoonIcon
          className={'fill-white'}
          width={22}
          height={22}
        />
      ) : (
        <SunIcon
          className={'fill-white'}
          width={22}
          height={22}
        />
      )}
    </button>
  );
};

export default ThemeToggle;
