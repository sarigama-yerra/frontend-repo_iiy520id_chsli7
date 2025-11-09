import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import KartGrid from './components/KartGrid';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black font-inter">
      <Navbar />
      <main>
        <Hero />
        <CallToAction />
        <KartGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
