import Hero from '@components/home/Hero';
import Services from '@components/home/Services';
import Contact from '@/components/Contact';
import Packages from '@components/home/Packages';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Ketering Smederevo — Koktel Ketering | Mini Sendviči & Kolači',
  description:
    'Koktel ketering u Smederevu i okolini. Mini sendviči, kanapei, slane pite i domaći kolači za svadbe, proslave i korporativne događaje. Dostava do 40 km.',
  alternates: {canonical: 'https://ketering.rs'},
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Packages />
      <Contact />
    </>
  );
}
