import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ContainerScrollSection } from '@/components/ContainerScrollSection';
import { BrandsStrip } from '@/components/BrandsStrip';
import { About } from '@/components/About';
import { Menu } from '@/components/Menu';
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
        <Menu />
      </main>
      <Footer />
    </>
  );
}
