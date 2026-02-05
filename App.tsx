import React, { useState, useMemo } from 'react';
import { Search, Moon, Command, LayoutGrid, Code2, PenTool, Music as MusicIcon, Film, User } from 'lucide-react';
import Hero from './components/Hero';
import Thoughts from './components/Thoughts';
import Music from './components/Music';
import Watchlist from './components/Watchlist';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { INITIAL_MEDIA, INITIAL_SONGS, INITIAL_THOUGHTS, SKILLS, INITIAL_PROJECTS, FOOTER_QUOTES } from './constants';
import { MediaItem, Song, Thought } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [songs, setSongs] = useState<Song[]>(INITIAL_SONGS);
  const [media, setMedia] = useState<MediaItem[]>(INITIAL_MEDIA);
  const [thoughts, setThoughts] = useState<Thought[]>(INITIAL_THOUGHTS);

  const randomQuote = useMemo(() => {
    return FOOTER_QUOTES[Math.floor(Math.random() * FOOTER_QUOTES.length)];
  }, []);

  const addSong = (song: Song) => {
    const updatedSongs = songs.map(s => s.status === 'playing' ? {...s, status: 'history'} : s) as Song[];
    setSongs([song, ...updatedSongs]);
  };
  const addMedia = (item: MediaItem) => setMedia([item, ...media]);
  const addThought = (thought: Thought) => setThoughts([thought, ...thoughts]);

  const navItems = [
    { id: 'projects', label: 'Work' },
    { id: 'thoughts', label: 'Blogs' },
    { id: 'media', label: 'Watchlist' },
    { id: 'music', label: 'Music' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
            <div>
                <Hero />
                <div className="mt-8 md:mt-16 space-y-20 border-t border-zinc-900 pt-16">
                    <section>
                         <div className="flex justify-between items-end mb-8">
                            <h3 className="text-2xl font-bold text-white tracking-tight">Selected Work</h3>
                            <button onClick={() => setActiveTab('projects')} className="text-sm text-zinc-500 hover:text-white transition-colors flex items-center gap-1 group">
                                View All 
                                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                            </button>
                        </div>
                        <Projects projects={INITIAL_PROJECTS.slice(0, 2)} />
                    </section>
                    
                    <section>
                         <div className="flex justify-between items-end mb-8">
                            <h3 className="text-2xl font-bold text-white tracking-tight">Latest Thoughts</h3>
                            <button onClick={() => setActiveTab('thoughts')} className="text-sm text-zinc-500 hover:text-white transition-colors flex items-center gap-1 group">
                                Read Blog 
                                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                            </button>
                        </div>
                        <div className="max-h-[500px] overflow-y-auto pr-2 custom-scrollbar bg-zinc-900/20 p-6 rounded-2xl border border-zinc-800/50">
                             <Thoughts thoughts={thoughts} onAddThought={addThought} compact={true} />
                        </div>
                    </section>
                </div>
            </div>
        );
      case 'projects':
        return (
            <div className="py-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-3xl font-bold text-white mb-2">Work</h2>
                <p className="text-zinc-400 mb-8">A collection of projects I've built.</p>
                <Projects projects={INITIAL_PROJECTS} />
            </div>
        );
      case 'thoughts':
        return (
            <div className="py-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-3xl font-bold text-white mb-2">Blogs</h2>
                <p className="text-zinc-400 mb-8">Thoughts, tutorials, and rants.</p>
                <Thoughts thoughts={thoughts} onAddThought={addThought} />
            </div>
        );
      case 'music':
        return (
             <div className="py-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                 <h2 className="text-3xl font-bold text-white mb-2">Music</h2>
                 <p className="text-zinc-400 mb-8">What I'm listening to right now.</p>
                 <Music songs={songs} onAddSong={addSong} />
             </div>
        );
      case 'media':
        return (
            <div className="py-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-3xl font-bold text-white mb-2">Watchlist</h2>
                <p className="text-zinc-400 mb-8">Movies and series I've watched recently.</p>
                <Watchlist mediaItems={media} onAddMedia={addMedia} />
            </div>
        );
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 font-sans selection:bg-indigo-500/30">
        <div className="max-w-4xl mx-auto px-6">
            {/* Header / Navbar */}
            <header className="flex items-center justify-between py-8 sticky top-0 bg-[#09090b]/80 backdrop-blur-md z-50 border-b border-white/5 md:border-none">
                <div className="flex items-center gap-8">
                     {/* Logo/Avatar */}
                    <button onClick={() => setActiveTab('home')} className="group flex items-center gap-2 hover:opacity-80 transition-opacity">
                         <div className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 overflow-hidden shadow-sm">
                             <img src="https://api.dicebear.com/9.x/pixel-art/svg?seed=Nikshep" alt="Logo" className="w-full h-full object-cover" />
                         </div>
                    </button>

                    {/* Nav Links */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                             <button 
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                    activeTab === item.id 
                                    ? 'text-white bg-zinc-900' 
                                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50'
                                }`}
                             >
                                {item.label}
                             </button>
                        ))}
                    </nav>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-3">
                     <button className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-xs text-zinc-400 hover:text-white hover:border-zinc-700 transition-all group">
                        <Search className="w-3.5 h-3.5 group-hover:text-white" />
                        <span>Search</span>
                        <div className="flex items-center gap-0.5 ml-2 px-1 bg-zinc-800 rounded border border-zinc-700 font-mono text-[10px] text-zinc-500">
                            <Command className="w-2.5 h-2.5" />
                            <span>K</span>
                        </div>
                     </button>
                     <button className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-all">
                        <Moon className="w-5 h-5" />
                     </button>
                </div>
            </header>
            
            {/* Mobile Nav Scroll (Horizontal) */}
            <nav className="md:hidden flex items-center gap-2 overflow-x-auto py-4 mb-2 scrollbar-hide -mx-6 px-6 border-b border-zinc-900">
                 {navItems.map((item) => (
                        <button 
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                            activeTab === item.id 
                            ? 'text-white bg-zinc-900' 
                            : 'text-zinc-400 hover:text-zinc-200 bg-zinc-900/30'
                        }`}
                        >
                        {item.label}
                        </button>
                ))}
            </nav>

            {/* Main Content */}
            <main className="min-h-[calc(100vh-300px)]">
                {renderContent()}
            </main>

            {/* Footer */}
            <footer className="py-12 border-t border-zinc-900 mt-20 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-sm gap-4">
                <div className="flex flex-col gap-2">
                    <p>© {new Date().getFullYear()} Nikshep. All rights reserved.</p>
                    <p className="text-zinc-500 italic text-xs max-w-md">"{randomQuote}"</p>
                </div>
                <div className="flex gap-6">
                     <a href="#" className="hover:text-zinc-400 transition-colors">Twitter</a>
                     <a href="#" className="hover:text-zinc-400 transition-colors">LinkedIn</a>
                     <a href="#" className="hover:text-zinc-400 transition-colors">GitHub</a>
                </div>
            </footer>
        </div>
    </div>
  );
};

export default App;