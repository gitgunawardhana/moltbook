import React from 'react';
import { Github, Twitter, MessageSquare, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="pt-24 pb-12 glass shadow-xl">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/favicon.svg" alt="Moltbook Logo" className="w-10 h-10" />
              <h3 className="text-3xl font-bold bg-gradient-to-r from-gold to-violet bg-clip-text text-transparent">Moltbook</h3>
            </div>
            <p className="text-white/50 max-w-sm mb-8">
              Revolutionizing the way the world interacts with decentralized finance through elegant design and powerful technology.
            </p>
            <div className="flex space-x-6">
              {[Twitter, Github, MessageSquare].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-gold hover:bg-white/10 transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-white/40">
              <li><a href="#" className="hover:text-violet transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-violet transition-colors">Ecosystem</a></li>
              <li><a href="#" className="hover:text-violet transition-colors">Governance</a></li>
              <li><a href="#" className="hover:text-violet transition-colors">Staking</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Stay Updated</h4>
            <p className="text-sm text-white/40 mb-4">Join our newsletter for the latest updates.</p>
            <div className="relative">
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full bg-white/5 rounded-xl px-4 py-3 text-sm focus:outline-none transition-all focus:ring-1 focus:ring-gold/30"
              />
              <button className="absolute right-2 top-2 p-1.5 rounded-lg bg-gold text-obsidian hover:bg-violet hover:text-white transition-all">
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-white/30 font-medium">
            © 2026 Moltbook Labs. All rights reserved.
          </p>
          <div className="flex space-x-8 text-xs text-white/30">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
