"use client";

import React, { useState, useEffect } from 'react';
import { Globe, ShieldCheck, Zap, MessageSquare, ChevronRight, Activity, MapPin, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- VED VET INTELLIGENT CORE ---
const SMART_ENGINE = {
  regions: {
    "ME": { name: "Middle East / Africa", animal: "Camel & Goat", code: "ME", flag: "🌍" },
    "SA": { name: "South America", animal: "Cattle", code: "SA", flag: "🌎" },
    "AS": { name: "Asia / India", animal: "Buffalo & Cow", code: "AS", flag: "🌏" },
  },
  ai_logic: {
    "milk": "Our data suggests 'Vedolact Gold'. It increases galactopoietic hormone activity naturally. Shall I show you the dosage?",
    "liver": "Liver dysfunction reduces feed intake. 'LiverPro' restores hepatic cells in 5-7 days.",
    "camel": "For Camels, we recommend our specialized 'Desert Shield' range for Surra and immunity.",
    "distributor": "We are expanding in your region. Would you like to connect with our Export Director?",
    "default": "I am Veda, your Veterinary AI Assistant. I can diagnose symptoms or suggest products. How can I help?"
  }
};

export default function Home() {
  const [activeRegion, setActiveRegion] = useState(SMART_ENGINE.regions.ME);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Hello. I am Veda. I have detected you are visiting our Global Hub. How is your livestock today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (!input.trim()) return;
    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput("");

    // Simulate AI Processing
    setTimeout(() => {
      let response = SMART_ENGINE.ai_logic.default;
      const lower = userMsg.toLowerCase();
      if (lower.includes('milk') || lower.includes('yield')) response = SMART_ENGINE.ai_logic.milk;
      else if (lower.includes('liver') || lower.includes('eat')) response = SMART_ENGINE.ai_logic.liver;
      else if (lower.includes('camel')) response = SMART_ENGINE.ai_logic.camel;
      else if (lower.includes('business') || lower.includes('distributor')) response = SMART_ENGINE.ai_logic.distributor;
      
      setMessages(prev => [...prev, { role: 'bot', text: response }]);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-gold-500 selection:text-black">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-40 glass-panel border-b-0 top-0 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.5)]">
            <span className="font-bold text-black text-xl">V</span>
          </div>
          <span className="text-xl font-bold tracking-wider">VED VET CARE</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-gold-500 transition-colors">Smart Solutions</a>
          <a href="#" className="hover:text-gold-500 transition-colors">Global Exports</a>
          <a href="#" className="hover:text-gold-500 transition-colors">R&D Lab</a>
        </div>
        <button className="bg-white/10 hover:bg-gold-500 hover:text-black border border-white/20 px-6 py-2 rounded-full font-medium transition-all duration-300">
          Partner Access
        </button>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center px-6 pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/20 via-black to-black z-0" />
        
        <div className="z-10 text-center max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-bold text-gold-400 tracking-widest uppercase">AI-Driven Veterinary Science</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              Advanced Nature. <br />
              <span className="text-gradient-gold">Global Intelligence.</span>
            </h1>
            
            <p className="text-gray-400 text-lg md:text-2xl mb-12 max-w-3xl mx-auto font-light">
              We engineer herbal precision for the world's most valuable livestock. 
              Currently optimizing health for <span className="text-white font-semibold">{activeRegion.animal}</span> in {activeRegion.name}.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button onClick={() => setChatOpen(true)} className="bg-gradient-to-r from-gold-400 to-gold-600 text-black px-10 py-5 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all transform hover:-translate-y-1">
                Start AI Diagnosis
              </button>
              <button className="glass-panel text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all border border-white/10">
                View Export Catalog
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- INTELLIGENT MARKET SELECTOR --- */}
      <section className="py-24 px-6 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Select Your Region</h2>
            <p className="text-gray-500">Our platform adapts formulas based on your climate and breed.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {Object.values(SMART_ENGINE.regions).map((region) => (
              <div 
                key={region.code}
                onClick={() => setActiveRegion(region)}
                className={`group p-8 rounded-3xl cursor-pointer transition-all duration-500 border relative overflow-hidden ${
                  activeRegion.code === region.code 
                  ? 'bg-gold-500/10 border-gold-500' 
                  : 'glass-panel border-white/5 hover:border-gold-500/30'
                }`}
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity text-6xl grayscale group-hover:grayscale-0">
                  {region.flag}
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-gold-400 transition-colors">{region.name}</h3>
                <p className="text-sm text-gray-400 mb-4">Primary: {region.animal}</p>
                <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-gold-500 uppercase">
                  Explore Solutions <ChevronRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- VEDA AI CHATBOT INTERFACE --- */}
      <div className="fixed bottom-8 right-8 z-50">
        <AnimatePresence>
          {chatOpen && (
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              className="mb-6 w-[90vw] md:w-[400px] glass-panel rounded-3xl overflow-hidden flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-gold-500/20"
            >
              {/* Bot Header */}
              <div className="bg-gradient-to-r from-gold-400 to-gold-600 p-5 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="bg-black/20 p-2 rounded-full">
                    <Zap size={18} className="text-black fill-black" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black text-lg leading-none">Veda AI</h3>
                    <span className="text-black/70 text-xs font-medium">Veterinary Consultant</span>
                  </div>
                </div>
                <button onClick={() => setChatOpen(false)} className="bg-black/10 hover:bg-black/20 p-2 rounded-full text-black transition">
                  <X size={20} />
                </button>
              </div>
              
              {/* Chat Area */}
              <div className="h-[400px] overflow-y-auto p-6 space-y-6 bg-black/80">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user' 
                      ? 'bg-gold-500 text-black font-medium rounded-tr-none' 
                      : 'bg-zinc-800 text-gray-200 border border-white/10 rounded-tl-none'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <div className="p-4 bg-zinc-900 border-t border-white/10 flex gap-3">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask Veda (e.g., 'Low Milk Yield')..."
                  className="flex-1 bg-black border border-zinc-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-500 transition-colors"
                />
                <button onClick={handleSendMessage} className="bg-gold-500 hover:bg-gold-400 text-black p-3 rounded-xl transition-colors">
                  <ChevronRight size={20} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Action Button */}
        {!chatOpen && (
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setChatOpen(true)}
            className="group relative flex items-center gap-3 bg-white text-black pl-5 pr-2 py-2 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all"
          >
            <span className="font-bold text-sm">Ask Veda</span>
            <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
              <MessageSquare size={20} className="fill-black" />
            </div>
            {/* Online Indicator */}
            <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </motion.button>
        )}
      </div>

    </div>
  );
}
