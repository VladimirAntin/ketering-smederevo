'use client';
import Link from 'next/link';
import Icon from '@/icons/Icon';
import LogoIcon from '@/icons/LogoIcon';
import {footerItems, footerServices, socialLinks} from '@/components/data/footer';
import {memo} from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={'bg-stone-900 py-14 text-white'}>
      <div className={'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'}>
        <div className={'mb-10 grid gap-8 md:grid-cols-4'}>
          <div className={'md:col-span-2'}>
            <div className={'mb-3 flex items-center gap-2'}>
              <LogoIcon width={26} height={26} className={'text-primary'} />
              <h3 className={'text-2xl font-semibold'}>{'Ketering Smederevo'}</h3>
            </div>
            <p className={'mb-5 max-w-sm text-sm leading-relaxed text-gray-400'}>
              {'Koktel ketering u Smederevu i okolini. Mini sendviči, kanapei, slane pite i domaći kolači za svaki povod. Dostava do 40 km.'}
            </p>
            <div className={'flex gap-4'}>
              {socialLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  target={'_blank'}
                  rel={'noopener noreferrer'}
                  className={'flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20'}
                  aria-label={link.name}>
                  <Icon name={link.icon} height={20} width={20} />
                </a>
              ))}
            </div>
          </div>
          <div className={'flex flex-row justify-between'}>
            <div>
              <h4 className={'mb-4 font-medium'}>{'Ponuda'}</h4>
              <ul className={'space-y-2 text-gray-400'}>
                {footerServices.map(service => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className={'mb-4 font-medium'}>{'Navigacija'}</h4>
              <ul className={'space-y-2 text-gray-400'}>
                {footerItems.map(item => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={'transition hover:text-white'}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={'border-t border-white/10 pt-8 text-center text-sm text-gray-400'}>
          <p>
            {'© '}{currentYear}{' Ketering Smederevo. Sva prava zadržana.'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
