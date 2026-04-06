import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ContainerScrollSection } from '@/components/ContainerScrollSection';
import { BrandsStrip } from '@/components/BrandsStrip';
import { About } from '@/components/About';
import { Menu } from '@/components/Menu';
import { Testimonials } from '@/components/Testimonials';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ContainerScrollSection />
        <BrandsStrip />
        <About />
        <Testimonials />
        <Menu />
      </main>
      <Footer />
    </>
  );
}
