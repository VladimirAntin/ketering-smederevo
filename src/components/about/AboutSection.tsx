'use client';
import {Trans, useTranslation} from 'react-i18next';
import Link from 'next/link';
import ArrowIcon from '@icons/ArrowIcon';
import {heroElements} from '@components/data/hero';
import {Fragment} from 'react';

const AboutSection = () => {
  const {t} = useTranslation();

  return (
    <section className={"mx-auto max-w-7xl px-4 pt-32 pb-20 sm:px-6 lg:px-8"}>
      <div className={"grid items-center gap-16 lg:grid-cols-2"}>
        <div className={"relative order-2 lg:order-1"}>
          <div className={"relative mx-auto aspect-4/5 max-w-sm overflow-hidden rounded-3xl shadow-2xl lg:mx-0 bg-linear-to-br from-[#0a1f2e] via-[#0e3a52] to-[#071724]"}>
            {/* Decorative blobs */}
            <div className={"absolute -top-16 -right-16 h-64 w-64 rounded-full bg-secondary/25 blur-3xl"} />
            <div className={"absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-primary/30 blur-3xl"} />
            {/* Subtle dot texture */}
            <div
              className={"absolute inset-0 opacity-[0.06]"}
              style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px'}}
            />
            {/* Large lotus watermark */}
            <svg
              className={"absolute inset-0 m-auto h-56 w-56 text-white/10"}
              viewBox={"0 0 24 24"}
              fill={"none"}
              stroke={"currentColor"}
              strokeWidth={"0.5"}>
              <path d={"M12 18c0 0-3-4-3-7.5C9 8 10.3 6.5 12 6.5s3 1.5 3 4C15 14 12 18 12 18z"} />
              <path d={"M11.5 15.5C10 17.2 7 17 5.5 15c-1-1.5-.5-3.5 1-4.2s3.2.3 4 2.2"} />
              <path d={"M12.5 15.5C14 17.2 17 17 18.5 15c1-1.5.5-3.5-1-4.2s-3.2.3-4 2.2"} />
              <path d={"M7 20.5q2.5-1.5 5 0 2.5 1.5 5 0"} />
            </svg>
            {/* Center card content */}
            <div className={"relative flex h-full flex-col items-center justify-center gap-4 p-8 text-center"}>
              <div className={"flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm"}>
                <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.2"} strokeLinecap={"round"} strokeLinejoin={"round"} className={"h-10 w-10 text-accent-dark"}>
                  <path d={"M12 18c0 0-3-4-3-7.5C9 8 10.3 6.5 12 6.5s3 1.5 3 4C15 14 12 18 12 18z"} />
                  <path d={"M11.5 15.5C10 17.2 7 17 5.5 15c-1-1.5-.5-3.5 1-4.2s3.2.3 4 2.2"} />
                  <path d={"M12.5 15.5C14 17.2 17 17 18.5 15c1-1.5.5-3.5-1-4.2s-3.2.3-4 2.2"} />
                  <path d={"M7 20.5q2.5-1.5 5 0 2.5 1.5 5 0"} />
                </svg>
              </div>
              <p className={"text-2xl font-light tracking-widest text-white/90 uppercase"}>{"Spa Deluxe"}</p>
              <p className={"text-sm text-white/50 tracking-widest uppercase"}>{"Niš, Srbija"}</p>
              <div className={"mt-4 flex gap-2"}>
                {['Relaks', 'Lepota', 'Mir'].map(tag => (
                  <span key={tag} className={"rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/70 backdrop-blur-sm"}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
          <div className={"absolute -right-4 -bottom-4 rounded-2xl border border-gray-200 bg-white px-5 py-3 shadow-lg lg:right-auto lg:-left-4 dark:border-gray-700 dark:bg-gray-800"}>
            <p className={"mb-0.5 text-xs text-gray-500 dark:text-gray-400"}>
              {t('Otvoreni svaki dan')}
            </p>
            <div className={"flex items-center gap-2"}>
              <span className={"bg-primary h-2 w-2 animate-pulse rounded-full"} />
              <span className={"text-sm font-semibold dark:text-white"}>{t('Pon–Sub 9–21h ✦')}</span>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className={"order-1 space-y-6 lg:order-2"}>
          <div className={"border-primary/20 bg-accent dark:border-primary/30 dark:bg-primary/10 inline-block rounded-full border px-4 py-2"}>
            <span className={"text-primary dark:text-accent-dark text-sm font-medium"}>
              {t('O Nama')}
            </span>
          </div>

          <h1 className={"text-4xl leading-tight sm:text-5xl lg:text-6xl dark:text-white"}>
            <Trans
              i18nKey={"Vaš mir je naša <0>misija</0> ✨"}
              components={[
                <span
                  key={"name"}
                  className={"from-primary to-secondary bg-linear-to-r bg-clip-text text-transparent"}
                />,
              ]}
            />
          </h1>

          <p className={"text-lg leading-relaxed text-gray-600 dark:text-gray-400"}>
            <Trans
              i18nKey={"Spa Deluxe je premium spa & wellness centar u <0>srcu Niša</0>, posvećen vašem opuštanju, lepoti i dobrobiti."}
              components={[
                <span
                  key={"bold"}
                  className={"font-semibold text-gray-900 dark:text-white"}
                />,
              ]}
            />
          </p>
          <p className={"text-lg leading-relaxed text-gray-600 dark:text-gray-400"}>
            <Trans
              i18nKey={"Koristimo <0>premium kozmetičke preparate i savremene tehnike</0> kako bismo svakom gostu pružili nezaboravno iskustvo koje ostavlja trag na telu i duši."}
              components={[
                <span
                  key={"bold"}
                  className={"font-semibold text-gray-900 dark:text-white"}
                />,
              ]}
            />
          </p>

          <div className={"flex flex-wrap gap-4 pt-2"}>
            <Link
              href={"/#contact"}
              className={"group bg-primary hover:bg-primary-dark inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-medium text-white transition"}>
              {t('Rezervišite Termin')}
              <ArrowIcon
                width={18}
                height={18}
                className={"rotate-90 transition-transform duration-200 group-hover:translate-x-1"}
              />
            </Link>
            <Link
              href={"/#services"}
              className={"group inline-flex items-center gap-2 rounded-full border border-gray-300 px-7 py-3.5 font-medium text-gray-700 transition hover:border-gray-500 dark:border-gray-600 dark:text-gray-300 dark:hover:border-gray-400"}>
              {t('Naše Usluge')}
              <ArrowIcon
                width={18}
                height={18}
                className={"rotate-90 transition-transform duration-200 group-hover:translate-x-1"}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className={"flex flex-wrap items-center justify-center gap-8 pt-12 text-sm text-gray-600 dark:text-gray-400"}>
        {heroElements.map((element, index) => (
          <Fragment key={'hero-elements-' + index}>
            <div className={"text-center"}>
              <p className={"mb-1 text-3xl dark:text-white"}>{element.value}</p>
              <div>{t(element.description)}</div>
            </div>
            {element?.pipe ? (
              <div className={"hidden h-12 w-px bg-gray-300 sm:block dark:bg-gray-600"} />
            ) : null}
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
