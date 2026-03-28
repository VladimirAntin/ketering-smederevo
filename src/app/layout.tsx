import {ReactNode} from 'react';
import './globals.css';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import type {Metadata} from 'next';
import '@i18n/localeConfig';

const BASE_URL = 'https://ketering.rs';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Ketering Smederevo — Koktel Ketering | Mini Sendviči, Kolači & Meze',
    template: '%s | Ketering Smederevo',
  },
  description:
    'Koktel ketering u Smederevu i okolini. Mini sendviči, kanapei, slane pite i domaći kolači za svadbe, proslave i korporativne događaje. Dostava do 40 km.',
  keywords: [
    'ketering Smederevo',
    'koktel ketering Smederevo',
    'mini sendviči Smederevo',
    'finger food Smederevo',
    'svadba ketering Smederevo',
    'proslava ketering',
    'dostava hrane Smederevo',
    'mini kolači ketering',
    'kanapei Smederevo',
  ],
  authors: [{name: 'Ketering Smederevo', url: BASE_URL}],
  creator: 'Ketering Smederevo',
  publisher: 'Ketering Smederevo',
  robots: {
    index: true,
    follow: true,
    googleBot: {index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1},
  },
  openGraph: {
    type: 'website',
    locale: 'sr_RS',
    url: BASE_URL,
    siteName: 'Ketering Smederevo',
    title: 'Ketering Smederevo — Koktel Ketering | Mini Sendviči & Kolači',
    description: 'Koktel ketering u Smederevu i okolini. Mini sendviči, kanapei i domaći kolači za svadbe i proslave.',
    images: [{url: '/og-image.jpg', width: 1200, height: 630, alt: 'Ketering Smederevo'}],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ketering Smederevo — Koktel Ketering | Mini Sendviči & Kolači',
    description: 'Koktel ketering u Smederevu i okolini. Mini sendviči, kanapei i domaći kolači.',
    images: ['/og-image.jpg'],
  },
  alternates: {canonical: BASE_URL},
  icons: {icon: '/favicon.png', apple: '/favicon.png'},
};

export default function RootLayout({children}: Readonly<{children: ReactNode}>) {
  return (
    <html lang={'sr'} className={'scroll-smooth'} suppressHydrationWarning>
      <head>
        <script
          type={'application/ld+json'}
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FoodEstablishment',
              name: 'Ketering Smederevo',
              url: BASE_URL,
              description: 'Koktel ketering u Smederevu i okolini — mini sendviči, kanapei i domaći kolači za proslave.',
              email: 'info@ketering.rs',
              telephone: '+381601234567',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Smederevo',
                addressCountry: 'RS',
              },
              areaServed: {
                '@type': 'City',
                name: 'Smederevo',
              },
              sameAs: ['https://www.instagram.com/ketering.smederevo'],
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning className={'flex min-h-full flex-col bg-white'}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
