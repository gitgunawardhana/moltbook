import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Shield, Zap, Database } from 'lucide-react';

const MotionDiv = motion.div;
const MotionH2 = motion.h2;
const MotionP = motion.p;

const FeatureCard = ({ title, desc, icon: Icon, delay, large }) => {
  const IconComponent = Icon;
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`overflow-hidden cursor-default group relative p-8 rounded-3xl glass transition-all duration-500 ${large ? 'md:col-span-2' : ''}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-violet/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>

      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:bg-gold/10">
          <IconComponent className="text-gold group-hover:text-violet transition-colors duration-500" size={28} />
        </div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-white/50 leading-relaxed font-light">
          {desc}
        </p>
      </div>

      {/* Animated Border */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-gold to-violet group-hover:w-full transition-all duration-700 rounded-b-3xl"></div>
    </MotionDiv>
  );
};

const Features = () => {
  const features = [
    {
      title: "Liquid Staking",
      desc: "Unlock the value of your staked assets while earning rewards. Moltbook provides instant liquidity without compromising security.",
      icon: Zap,
      delay: 0.1,
      large: false
    },
    {
      title: "Multi-Asset Vaults",
      desc: "Diversify your portfolio with automated vault strategies that rebalance in real-time across multiple chains and protocols.",
      icon: Layers,
      delay: 0.2,
      large: true
    },
    {
      title: "Gasless Evolution",
      desc: "Never worry about network fees again. Our meta-transaction layer handles everything behind the scenes for a smooth experience.",
      icon: Database,
      delay: 0.3,
      large: true
    },
    {
      title: "Quantum Security",
      desc: "Protect your wealth with next-generation encryption and multi-signature security frameworks that anticipate future threats.",
      icon: Shield,
      delay: 0.4,
      large: false
    }
  ];

  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <MotionH2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Built for the <span className="text-gold">Next Era</span>
          </MotionH2>
          <MotionP
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 max-w-2xl mx-auto text-lg"
          >
            Traditional finance is slow, opaque, and rigid. Moltbook is fast, transparent, and built to evolve with the market.
          </MotionP>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
