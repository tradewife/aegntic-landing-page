import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import Footer from './components/Footer';
import MinimalCursor from './components/MinimalCursor';

function App() {
  return (
    <div className="min-h-screen bg-white font-helvetica antialiased">
      <Header />
      <main>
        <Hero />
        <ProjectGrid />
      </main>
      <Footer />
      <MinimalCursor />
    </div>
  );
}

export default App;