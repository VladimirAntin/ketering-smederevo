'use client';
import {memo} from 'react';
import {servicesItems} from '@components/data/services';
import {motion} from 'framer-motion';
import {cn} from '@utils/CN';
import WaveDivider from '@/components/WaveDivider';

const Services = () => (
  <section id={'services'} className={'relative bg-stone-950 pb-40 pt-20 lg:pb-52 lg:pt-28'}>
    <div className={'mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'}>
      {/* Header */}
      <motion.div
        className={'mb-14'}
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, margin: '-50px'}}
        transition={{duration: 0.5, ease: 'easeOut'}}>
        <span className={'mb-4 block text-sm font-semibold tracking-widest text-primary uppercase'}>
          {'Šta nudimo'}
        </span>
        <div className={'flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between'}>
          <h2 className={'text-4xl font-light text-white sm:text-5xl lg:text-6xl'}>
            {'Naš Meni'}
          </h2>
          <p className={'max-w-xs text-sm leading-relaxed text-white/35 lg:text-right'}>
            {'Sve pripremamo od svežih namirnica — direktno do vašeg stola'}
          </p>
        </div>
      </motion.div>

      {/* Alternating rows */}
      <div>
        {servicesItems.map((service, index) => (
          <motion.div
            key={index}
            initial={{opacity: 0, y: 24}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-60px'}}
            transition={{duration: 0.55, ease: 'easeOut'}}
            className={'group border-t border-white/8 py-10 lg:py-12'}>
            <div
              className={cn(
                'flex flex-col gap-7 lg:flex-row lg:items-center lg:gap-14',
                index % 2 !== 0 && 'lg:flex-row-reverse',
              )}>
              {/* Image */}
              <div className={'relative w-full shrink-0 overflow-hidden rounded-2xl lg:w-[42%]'}>
                <div className={'aspect-video overflow-hidden rounded-2xl lg:aspect-4/3'}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className={'h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'}
                    loading={'lazy'}
                  />
                </div>
              </div>

              {/* Text */}
              <div className={'flex flex-1 flex-col'}>
                {/* Number + line */}
                <div className={'mb-5 flex items-center gap-3'}>
                  <span className={'font-mono text-xs font-bold tracking-widest text-white/20'}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className={'h-px flex-1 bg-white/8'} />
                </div>

                <h3 className={'mb-3 text-2xl font-semibold text-white lg:text-3xl'}>
                  {service.title}
                </h3>
                <p className={'mb-6 text-sm leading-relaxed text-white/45'}>
                  {service.description}
                </p>

                {/* Feature chips */}
                <div className={'flex flex-wrap gap-2'}>
                  {service.features.map((f, i) => (
                    <span
                      key={i}
                      className={'rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/55'}>
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        {/* Bottom border */}
        <div className={'border-t border-white/8'} />
      </div>
    </div>
    <WaveDivider fill={'#fafaf9'} inverted />
  </section>
);

export default memo(Services);
