import { useState } from "react";
import useScroll from "./hooks/useScroll";
import useSectionRefs from "./hooks/useSectionRefs";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import TrainingAwards from "./components/TrainingAwards";
import Showreel from "./components/Showreel";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrolled = useScroll();
  const refs = useSectionRefs();

  const navItems = [
    { name: "Home", ref: refs.homeRef },
    { name: "About", ref: refs.aboutRef },
    { name: "Work", ref: refs.workRef },
    { name: "Reel", ref: refs.reelRef },
    { name: "Gallery", ref: refs.galleryRef },
    { name: "Contact", ref: refs.contactRef }
  ];

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <>
      <Navbar navItems={navItems} scrolled={scrolled}
        isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection} />

      <div ref={refs.homeRef}><Hero reelRef={refs.reelRef} scrollToSection={scrollToSection} /></div>
      <About aboutRef={refs.aboutRef} />
      <Work workRef={refs.workRef} />
      <TrainingAwards />
      <Showreel reelRef={refs.reelRef} />
      <Gallery galleryRef={refs.galleryRef} />
      <Contact contactRef={refs.contactRef} />
      <Footer />
    </>
  );
}