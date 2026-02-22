import React from 'react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div;
const MotionSpan = motion.span;
const MotionButton = motion.button;

const Hero = () => {
  return (
    <section className="relative min-height-screen pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <MotionSpan
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block px-4 py-1.5 rounded-full glass text-xs font-bold tracking-widest text-gold uppercase mb-6"
          >
            Evolution is here
          </MotionSpan>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            The Future of Finance, <br />
            <span className="bg-gradient-to-r from-gold to-violet bg-clip-text text-transparent">
              Unfolded
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 mb-10 max-w-lg">
            Experience the next generation of decentralized liquidity. Moltbook transforms complex yield strategies into seamless financial evolution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <MotionButton
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-2xl bg-white text-obsidian font-bold text-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all"
            >
              Start Evolving
            </MotionButton>
            <MotionButton
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-2xl glass font-bold text-lg hover:bg-white/10 transition-all"
            >
              Read Whitepaper
            </MotionButton>
          </div>
        </MotionDiv>

        {/* Right Content - 3D Orb */}
        <MotionDiv
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >
          {/* Background Glow */}
          <div className="absolute w-80 h-80 rounded-full bg-violet/20 blur-[100px] animate-pulse"></div>

          {/* Main Orb */}
          <MotionDiv
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              scale: [1, 1.05, 1]
            }}
            transition={{
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative w-64 h-64 md:w-96 md:h-96 rounded-full orb-gradient shadow-[inset_-20px_-20px_60px_rgba(0,0,0,0.5),0_0_80px_rgba(139,92,246,0.3)]"
          >
            {/* Inner details for 3D effect */}
            <div className="absolute inset-0 rounded-full opacity-30"></div>
            <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white/20 blur-3xl"></div>
          </MotionDiv>

          {/* Floating rings */}
          <MotionDiv
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute w-[110%] h-[110%] rounded-full shadow-[0_0_1px_rgba(255,255,255,0.1)]"
          ></MotionDiv>
          <MotionDiv
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute w-[130%] h-[130%] rounded-full shadow-[0_0_1px_rgba(255,255,255,0.05)]"
          ></MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
};

export default Hero;
