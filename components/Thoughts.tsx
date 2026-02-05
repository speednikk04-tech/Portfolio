import React, { useState } from 'react';
import { PenTool, Hash, Send } from 'lucide-react';
import { Thought } from '../types';

interface ThoughtsProps {
  thoughts: Thought[];
  onAddThought: (thought: Thought) => void;
  compact?: boolean;
}

const Thoughts: React.FC<ThoughtsProps> = ({ thoughts, onAddThought, compact = false }) => {
  const [newThought, setNewThought] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newThought.trim()) return;

    const thought: Thought = {
      id: Date.now().toString(),
      content: newThought,
      timestamp: new Date().toISOString(),
      tags: ['Daily', 'Reflections'] // Mock tags
    };

    onAddThought(thought);
    setNewThought('');
  };

  return (
    <div className={`${compact ? 'w-full' : 'max-w-2xl mx-auto space-y-8'}`}>
      {!compact && (
        <>
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-indigo-500/10 rounded-xl">
                    <PenTool className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-white">Stream of Consciousness</h2>
                    <p className="text-zinc-400 text-sm">Micro-blogging my journey.</p>
                </div>
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="relative">
                <textarea
                    value={newThought}
                    onChange={(e) => setNewThought(e.target.value)}
                    placeholder="What's on your mind?"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-4 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all resize-none h-32"
                />
                <div className="absolute bottom-4 right-4 flex items-center gap-2">
                    <span className="text-xs text-zinc-600">{newThought.length}/280</span>
                    <button 
                        type="submit"
                        disabled={!newThought.trim()}
                        className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-lg transition-colors"
                    >
                        <Send className="w-4 h-4" />
                    </button>
                </div>
            </form>
        </>
      )}

      {/* Feed */}
      <div className={`space-y-6 relative ${!compact ? 'before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent' : ''}`}>
        {thoughts.map((thought) => (
          <div key={thought.id} className={`relative flex ${compact ? 'flex-col gap-2 border-b border-zinc-800/50 pb-4 last:border-0' : 'items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active'}`}>
            
            {/* Timeline Dot - Only show in full view */}
            {!compact && (
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-800 bg-zinc-900 group-hover:border-indigo-500/50 group-hover:bg-indigo-900/20 transition-colors shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <Hash className="w-4 h-4 text-zinc-500 group-hover:text-indigo-400" />
                </div>
            )}
            
            {/* Content Card */}
            <div className={`${compact ? 'w-full' : 'w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-zinc-900/50 border border-zinc-800/50 p-6 rounded-2xl shadow-sm hover:bg-zinc-900 transition-colors'}`}>
                <time className="block mb-2 text-xs font-medium text-zinc-500 uppercase tracking-wide">
                    {new Date(thought.timestamp).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                </time>
                <p className="text-zinc-200 leading-relaxed text-sm md:text-base mb-3">
                    {thought.content}
                </p>
                <div className="flex flex-wrap gap-2">
                    {thought.tags.map(tag => (
                        <span key={tag} className="text-[10px] bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded-full border border-zinc-700">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Thoughts;