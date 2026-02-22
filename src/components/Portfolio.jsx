import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownLeft, BookOpen } from 'lucide-react';

const MotionDiv = motion.div;

const Portfolio = () => {
  const transactions = [
    { type: 'Incoming', amount: '+ 2,540 MOLT', date: 'Feb 22, 2026', from: '0x82...f9a', status: 'Confirmed' },
    { type: 'Outgoing', amount: '- 1.25 ETH', date: 'Feb 20, 2026', from: 'Swap: ETH/MOLT', status: 'Confirmed' },
    { type: 'Incoming', amount: '+ 500 USDC', date: 'Feb 18, 2026', from: 'Liquidity Reward', status: 'Pending' },
    { type: 'Outgoing', amount: '- 150 MOLT', date: 'Feb 15, 2026', from: '0x31...e2c', status: 'Confirmed' },
  ];

  return (
    <section id="ecosystem" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <MotionDiv
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Manage Your Assets in a <br />
              <span className="text-violet">Digital Ledger</span>
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Moltbook's interface is inspired by the elegance of classical accounting, reimagined for the decentralized era. Clear, precise, and powerful.
            </p>
            <div className="space-y-4">
              {['Seamless cross-chain tracking', 'Instant yield visualization', 'Institutional-grade reporting'].map((text, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                  <span className="text-white/80">{text}</span>
                </div>
              ))}
            </div>
          </MotionDiv>

          {/* Book-like UI Container */}
          <MotionDiv
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative perspective-[1000px]"
          >
            <div className="glass rounded-[2rem] p-1 shadow-2xl relative overflow-hidden">
              <div className="bg-obsidian rounded-[1.8rem] p-8 md:p-10">
                <div className="flex justify-between items-center mb-10 pb-6">
                  <div className="flex items-center space-x-3">
                    <BookOpen className="text-gold" />
                    <span className="text-sm font-bold tracking-widest text-white/50 uppercase">Transaction History</span>
                  </div>
                  <div className="text-xs text-white/30 font-mono">ID: MLT-882190</div>
                </div>

                <div className="space-y-6">
                  {transactions.map((tx, idx) => (
                    <div key={idx} className="flex justify-between items-center group cursor-pointer">
                      <div className="flex items-center space-x-4">
                        <div className={`p-2.5 rounded-xl ${tx.type === 'Incoming' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                          {tx.type === 'Incoming' ? <ArrowDownLeft size={20} /> : <ArrowUpRight size={20} />}
                        </div>
                        <div>
                          <p className="font-bold text-white group-hover:text-gold transition-colors">{tx.amount}</p>
                          <p className="text-xs text-white/40">{tx.from}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{tx.date}</p>
                        <p className={`text-[10px] uppercase font-bold tracking-tighter ${tx.status === 'Pending' ? 'text-amber-400' : 'text-white/30'}`}>
                          {tx.status}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-10 py-4 rounded-xl text-white/40 text-sm font-bold hover:bg-white/5 transition-all">
                  View Full Ledger
                </button>
              </div>

              {/* Decorative Book Edge */}
              <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-white/10 to-transparent"></div>
            </div>

            {/* Background elements to give depth */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full glass rounded-[2rem]"></div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
