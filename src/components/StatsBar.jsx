import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

const MotionDiv = motion.div;

const StatsBar = () => {
  const stats = [
    { symbol: 'MOLT', price: '$1.24', change: '+5.2%', up: true },
    { symbol: 'ETH', price: '$2,845.12', change: '+1.8%', up: true },
    { symbol: 'BTC', price: '$64,210.50', change: '-0.4%', up: false },
    { symbol: 'SOL', price: '$142.33', change: '+12.5%', up: true },
    { symbol: 'BNB', price: '$580.12', change: '-1.2%', up: false },
    { symbol: 'USDC', price: '$1.00', change: '0.0%', up: true },
  ];

  return (
    <div className="py-8 glass overflow-hidden">
      <div className="flex w-max">
        <MotionDiv
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex space-x-16 px-8 items-center"
        >
          {/* Duplicate for infinite loop */}
          {[...stats, ...stats, ...stats, ...stats].map((stat, idx) => (
            <div key={idx} className="flex items-center space-x-4 shrink-0">
              <span className="text-white/40 font-bold tracking-tighter text-lg">{stat.symbol}</span>
              <span className="text-white font-mono font-medium">{stat.price}</span>
              <span className={`flex items-center text-sm font-bold ${stat.up ? 'text-green-400' : 'text-red-400'}`}>
                {stat.up ? <TrendingUp size={14} className="mr-1" /> : <TrendingDown size={14} className="mr-1" />}
                {stat.change}
              </span>
            </div>
          ))}
        </MotionDiv>
      </div>
    </div>
  );
};

export default StatsBar;
