import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Background Layer */}
      <div className="mesh-bg mesh-animate" />

      {/* Content Layers */}
      <Navbar />

      <main>
        <Hero />
        <StatsBar />
        <Features />
        <Portfolio />

        {/* Call to Action Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="glass rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
              <div className="absolute -top-24 -left-24 w-96 h-96 bg-gold/10 blur-[100px] rounded-full" />
              <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-violet/10 blur-[100px] rounded-full" />

              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to fold into <br /> <span className="text-gold">the future?</span></h2>
                <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12">
                  Join thousands of early adopters and institutional partners who are already evolving with Moltbook.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <button className="cursor-pointer px-10 py-5 rounded-2xl bg-gradient-to-r from-gold to-violet text-white font-bold text-xl glow-gold">
                    Launch App
                  </button>
                  <button className="cursor-pointer px-10 py-5 rounded-2xl glass font-bold text-xl hover:bg-white/10 transition-all">
                    Talk to Sales
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
