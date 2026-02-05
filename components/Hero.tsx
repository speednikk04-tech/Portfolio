import React from 'react';
import { FileText, Send, Github, Linkedin, Twitter, Youtube, Instagram, Dribbble, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-start justify-center py-16 md:py-24 animate-in fade-in duration-700">
      {/* Avatar */}
      <div className="relative mb-8 group">
        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-zinc-800 bg-zinc-900 shadow-2xl transition-transform duration-300 group-hover:scale-105">
           <img 
             src="https://api.dicebear.com/9.x/pixel-art/svg?seed=Nikshep" 
             alt="Avatar" 
             className="w-full h-full object-cover"
           />
        </div>
        <div className="absolute bottom-1 right-1 w-5 h-5 bg-zinc-950 rounded-full flex items-center justify-center border border-zinc-800 z-10">
           <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
        Hi, I'm Nikshep — A Full Stack web <br className="hidden md:block" /> developer.
      </h1>

      {/* Bio with badges */}
      <div className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl mb-10 font-light">
        I build interactive web apps using 
        <span className="inline-flex items-center align-middle mx-1.5 px-2.5 py-1 rounded-md bg-[#2d79c7]/10 border border-[#2d79c7]/20 text-[#2d79c7] text-sm font-medium transition-colors hover:bg-[#2d79c7]/20">
           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" className="w-3.5 h-3.5 mr-1.5" alt="TS" />
           Typescript
        </span>
        , 
        <span className="inline-flex items-center align-middle mx-1.5 px-2.5 py-1 rounded-md bg-[#61dafb]/10 border border-[#61dafb]/20 text-[#61dafb] text-sm font-medium transition-colors hover:bg-[#61dafb]/20">
           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-3.5 h-3.5 mr-1.5" alt="React" />
           React
        </span>
        ,
        <span className="inline-flex items-center align-middle mx-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-200 text-sm font-medium transition-colors hover:bg-white/10">
           <svg className="w-3.5 h-3.5 mr-1.5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c.005-.045.005-.12.005-.164v-7.65c0-.986-.801-1.787-1.787-1.787H1.787C.801 2.472 0 3.273 0 4.26v15.48c0 .986.801 1.787 1.787 1.787h20.426c.986 0 1.787-.801 1.787-1.787v-7.667zM18.847 16.51l-4.22-6.196v6.196h-2.18V7.323h2.246l4.153 6.071V7.323h2.18v9.187h-2.18z"/></svg>
           Next.js
        </span>
        ,
        <span className="inline-flex items-center align-middle mx-1.5 px-2.5 py-1 rounded-md bg-[#fbf0df]/10 border border-[#fbf0df]/20 text-[#fbf0df] text-sm font-medium transition-colors hover:bg-[#fbf0df]/20">
           <span className="mr-1.5 text-xs">🍞</span> Bun
        </span>
        and 
        <span className="inline-flex items-center align-middle mx-1.5 px-2.5 py-1 rounded-md bg-[#336791]/10 border border-[#336791]/20 text-[#336791] text-sm font-medium transition-colors hover:bg-[#336791]/20">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" className="w-3.5 h-3.5 mr-1.5" alt="Postgres" />
            PostgreSQL
        </span>. 
        With a focus on <span className="text-zinc-100 font-semibold">UI</span> design. Enthusiastic about <span className="text-zinc-100 font-semibold">Three.js</span>, driven by a keen eye for design.
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 mb-12">
        <button className="group flex items-center gap-2 px-5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-300 hover:text-white hover:border-zinc-700 hover:bg-zinc-800/80 transition-all font-medium text-sm">
          <FileText className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
          Resume / CV
        </button>
        <button className="group flex items-center gap-2 px-5 py-2.5 bg-white text-black border border-white rounded-lg hover:bg-zinc-200 transition-colors font-medium text-sm shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          <Send className="w-4 h-4" />
          Get in touch
        </button>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-6 text-zinc-500">
         <a href="#" className="hover:text-white hover:scale-110 transition-all duration-300"><Twitter className="w-5 h-5" /></a>
         <a href="#" className="hover:text-[#0077b5] hover:scale-110 transition-all duration-300"><Linkedin className="w-5 h-5" /></a>
         <a href="#" className="hover:text-white hover:scale-110 transition-all duration-300"><Github className="w-5 h-5" /></a>
         <a href="#" className="hover:text-[#FF0000] hover:scale-110 transition-all duration-300"><Youtube className="w-5 h-5" /></a>
         <a href="#" className="hover:text-[#E1306C] hover:scale-110 transition-all duration-300"><Instagram className="w-5 h-5" /></a>
         <a href="#" className="hover:text-[#ea4c89] hover:scale-110 transition-all duration-300"><Dribbble className="w-5 h-5" /></a>
         <a href="#" className="hover:text-zinc-300 hover:scale-110 transition-all duration-300"><Mail className="w-5 h-5" /></a>
      </div>
    </div>
  );
};

export default Hero;