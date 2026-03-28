'use client';
import {memo, useState} from 'react';
import Link from 'next/link';
import {cn} from '@utils/CN';
import {packages} from '@components/data/packages';
import {motion, AnimatePresence} from 'framer-motion';
import WaveDivider from '@/components/WaveDivider';

const Packages = () => {
  const [active, setActive] = useState(packages.findIndex(p => p.highlighted) ?? 0);
  const pkg = packages[active];

  return (
    <section id={'packages'} className={'relative bg-stone-50 pb-40 pt-20 lg:pb-52 lg:pt-28'}>
      <div className={'mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'}>

        {/* Header */}
        <motion.div
          className={'mb-10 text-center'}
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: '-50px'}}
          transition={{duration: 0.5, ease: 'easeOut'}}>
          <span className={'mb-3 inline-block text-sm font-semibold tracking-widest text-primary uppercase'}>
            {'Cenovnik'}
          </span>
          <h2 className={'text-4xl text-stone-900 sm:text-5xl'}>{'Naša Ponuda'}</h2>
        </motion.div>

        {/* Tab bar — horizontally scrollable on mobile */}
        <div className={'mb-6 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'}>
          {packages.map((p, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={cn(
                'shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200',
                i === active
                  ? 'bg-stone-900 text-white shadow-md'
                  : 'border border-stone-200 bg-white text-stone-500 hover:border-stone-400 hover:text-stone-800',
              )}>
              {p.title}
              {p.priceNote && (
                <span className={'ml-2 rounded-full bg-amber-400 px-1.5 py-0.5 text-[10px] font-bold text-amber-900'}>
                  {'★'}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Active package panel */}
        <AnimatePresence mode={'wait'}>
          <motion.div
            key={active}
            initial={{opacity: 0, y: 14}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -8}}
            transition={{duration: 0.28, ease: 'easeOut'}}
            className={'overflow-hidden rounded-3xl bg-white shadow-lg lg:grid lg:grid-cols-2'}>

            {/* Image */}
            <div className={'relative h-60 overflow-hidden sm:h-72 lg:h-auto'}>
              <img
                src={pkg.image}
                alt={pkg.title}
                className={'h-full w-full object-cover'}
              />
              <div className={'absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent lg:bg-linear-to-r'} />
              {/* Price — visible over image on mobile */}
              <div className={'absolute bottom-4 left-4 lg:hidden'}>
                <span className={'text-3xl font-light text-white drop-shadow'}>{pkg.price}</span>
              </div>
              {pkg.priceNote && (
                <div className={'absolute top-4 left-4'}>
                  <span className={'rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-amber-900'}>
                    {'✦ '}{pkg.priceNote}
                  </span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className={'flex flex-col justify-between p-7 lg:p-10'}>
              <div>
                <p className={'mb-1 text-xs font-semibold tracking-widest text-stone-400 uppercase'}>
                  {pkg.subtitle}
                </p>
                <h3 className={'mb-1 text-2xl font-bold text-stone-900 lg:text-3xl'}>
                  {pkg.title}
                </h3>
                {/* Price — hidden on mobile (shown over image), visible on desktop */}
                <p className={'mb-6 hidden text-4xl font-light text-primary lg:block'}>
                  {pkg.price}
                </p>

                <div className={'mb-6 border-t border-stone-100 pt-5'}>
                  <p className={'mb-3 text-xs font-semibold tracking-widest text-stone-400 uppercase'}>
                    {'Šta je uključeno'}
                  </p>
                  <ul className={'grid grid-cols-1 gap-2.5 sm:grid-cols-2'}>
                    {pkg.features.map((f, i) => (
                      <li key={i} className={'flex items-center gap-2.5'}>
                        <span className={'h-1.5 w-1.5 shrink-0 rounded-full bg-primary'} />
                        <span className={'text-sm text-stone-600'}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                href={{hash: 'contact', query: {package: pkg.title}}}
                className={'mt-2 block rounded-2xl bg-primary py-4 text-center text-sm font-semibold text-white shadow-md shadow-primary/20 transition hover:bg-primary-dark'}>
                {pkg.cta}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Package indicators */}
        <div className={'mt-5 flex items-center justify-center gap-1.5'}>
          {packages.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Paket ${i + 1}`}
              className={cn(
                'rounded-full transition-all duration-300',
                i === active ? 'w-6 h-1.5 bg-stone-900' : 'h-1.5 w-1.5 bg-stone-300 hover:bg-stone-400',
              )}
            />
          ))}
        </div>
      </div>
      <WaveDivider fill={'#1c1917'} />
    </section>
  );
};

export default memo(Packages);
