'use client';
import {FC, memo, ReactNode, useEffect, useState} from 'react';
import ArrowIcon from '@icons/ArrowIcon';
import Link from 'next/link';
import {cn} from '@utils/CN';
import WaveDivider from '@/components/WaveDivider';
import {motion} from 'framer-motion';

const SLIDES = [
  'https://images.pexels.com/photos/3184188/pexels-photo-3184188.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1920',
];

const TAGS = [
  {emoji: '🥪', label: 'Mini sendviči'},
  {emoji: '🎂', label: 'Mini kolači'},
  {emoji: '🧆', label: 'Kanapei'},
  {emoji: '🍓', label: 'Voćni sto'},
  {emoji: '🥐', label: 'Slane pite'},
];

const Highlight: FC<{children?: ReactNode}> = ({children}) => (
  <span className={'text-amber-300'}>{children}</span>
);

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={'relative flex min-h-screen flex-col items-center justify-center overflow-hidden'}>
      {/* Sliding image background */}
      <div className={'absolute inset-0'}>
        {SLIDES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={''}
            aria-hidden={'true'}
            className={cn(
              'absolute inset-0 h-full w-full object-cover transition-opacity duration-1000',
              i === current ? 'opacity-100' : 'opacity-0',
            )}
          />
        ))}
        <div className={'absolute inset-0 bg-linear-to-b from-black/75 via-black/55 to-black/80'} />
      </div>

      {/* Content */}
      <div className={'relative z-10 mx-auto max-w-4xl px-4 pt-24 pb-20 text-center sm:px-6 lg:px-8'}>

        {/* Menu tags */}
        <div className={'mb-8 flex flex-wrap items-center justify-center gap-2'}>
          {TAGS.map(tag => (
            <span
              key={tag.label}
              className={'inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-sm text-white/90 backdrop-blur-sm'}>
              <span>{tag.emoji}</span>
              {tag.label}
            </span>
          ))}
        </div>

        {/* Heading */}
        <h1 className={'mb-5 text-4xl leading-tight font-light text-white sm:text-5xl lg:text-7xl'}>
          {'Koktel ketering za '}<br /><Highlight>{'svaki povod'}</Highlight>
        </h1>

        {/* Subtitle */}
        <p className={'mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl'}>
          {'Domaći mini zalogaji, kolači i delikatese — dostavljamo i postavljamo direktno na vašu proslavu u Smederevu i okolini.'}
        </p>

        {/* CTA buttons */}
        <div className={'flex flex-col items-center justify-center gap-4 sm:flex-row'}>
          <Link
            href={'/#contact'}
            className={'group flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-medium text-white shadow-lg shadow-primary/30 transition hover:bg-primary-dark'}>
            {'Zatražite Ponudu'}
            <ArrowIcon height={20} width={20} className={'rotate-90 transition-transform duration-200 group-hover:translate-x-1'} />
          </Link>
          <Link
            href={'tel:+381601234567'}
            className={'group flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-8 py-4 font-medium text-white backdrop-blur-sm transition hover:border-white/70 hover:bg-white/20'}>
            {'Pozovite Nas'}
            <ArrowIcon height={20} width={20} className={'rotate-90 transition-transform duration-200 group-hover:translate-x-1'} />
          </Link>
        </div>

        {/* Slide dots */}
        <div className={'mt-14 flex items-center justify-center gap-2'}>
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slika ${i + 1}`}
              className={cn(
                'h-1.5 rounded-full transition-all duration-300',
                i === current ? 'w-8 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/70',
              )}
            />
          ))}
        </div>
      </div>

      {/* Animated scroll arrow */}
      <motion.a
        href={'#services'}
        aria-label={'Skroluj dole'}
        className={'absolute bottom-32 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1'}
        initial={{opacity: 0, y: -8}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 1.2, duration: 0.6}}>
        <span className={'text-xs font-medium tracking-widest text-white/40 uppercase'}>{'Skroluj'}</span>
        <motion.div
          animate={{y: [0, 8, 0]}}
          transition={{duration: 1.4, repeat: Infinity, ease: 'easeInOut'}}>
          <svg
            width={28}
            height={28}
            viewBox={'0 0 24 24'}
            fill={'none'}
            stroke={'currentColor'}
            strokeWidth={1.5}
            strokeLinecap={'round'}
            strokeLinejoin={'round'}
            className={'text-white/60'}>
            <path d={'M6 9l6 6 6-6'} />
          </svg>
        </motion.div>
        <motion.div
          animate={{y: [0, 8, 0]}}
          transition={{duration: 1.4, repeat: Infinity, ease: 'easeInOut', delay: 0.2}}>
          <svg
            width={28}
            height={28}
            viewBox={'0 0 24 24'}
            fill={'none'}
            stroke={'currentColor'}
            strokeWidth={1.5}
            strokeLinecap={'round'}
            strokeLinejoin={'round'}
            className={'text-white/30'}>
            <path d={'M6 9l6 6 6-6'} />
          </svg>
        </motion.div>
      </motion.a>

      <WaveDivider fill={'#0c0a09'} />
    </section>
  );
};

export default memo(Hero);
