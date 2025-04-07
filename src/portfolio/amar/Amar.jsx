// src/App.jsx
import React,{useEffect} from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Journey from './pages/Journey';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import bgVid from './assets/bgvid.mp4'
import Footer from './components/Footer';
export default function App() {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="relative w-full text-black overflow-hidden">
      {/* 🔥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src={bgVid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🧊 Overlay (optional, for dark blur effect) */}
      <div className="fixed inset-0 bg-black/30" />

      {/* 📌 Navbar stays on top */}
      <Navbar />

      {/* 📄 Page Sections */}
      <main className="relative z-10 pt-20">
        <section id="home" className="min-h-screen scroll-mt-20 flex items-center justify-center">
          <Home />
        </section>

        <section id="about" className="min-h-screen scroll-mt-20 flex items-center justify-center">
          <About />
        </section>

        <section id="projects" className="min-h-screen scroll-mt-20 flex items-center justify-center">
          <Projects />
        </section>

        <section id="journey" className="min-h-screen scroll-mt-20 flex items-center justify-center">
          <Journey />
        </section>

        <section id="contact" className="min-h-screen scroll-mt-20 flex items-center justify-center">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
