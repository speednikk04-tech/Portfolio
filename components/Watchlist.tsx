import React, { useState } from 'react';
import { Film, Star, Plus } from 'lucide-react';
import { MediaItem, MediaType } from '../types';

interface WatchlistProps {
  mediaItems: MediaItem[];
  onAddMedia: (item: MediaItem) => void;
}

const Watchlist: React.FC<WatchlistProps> = ({ mediaItems, onAddMedia }) => {
  const [filter, setFilter] = useState<'ALL' | MediaType>('ALL');

  const filteredItems = filter === 'ALL' 
    ? mediaItems 
    : mediaItems.filter(item => item.type === filter);

  const handleSimulateAdd = () => {
    const newItem: MediaItem = {
      id: Date.now().toString(),
      title: 'Interstellar',
      type: MediaType.MOVIE,
      rating: 5,
      review: 'Love transcends dimensions.',
      poster: `https://picsum.photos/300/450?random=${Date.now()}`,
      watchedAt: new Date().toISOString()
    };
    onAddMedia(newItem);
  };

  return (
    <div className="space-y-6">
       <div className="flex justify-between items-center flex-wrap gap-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <Film className="text-rose-500" /> Watchlist
        </h2>
        
        <div className="flex gap-2 bg-zinc-900 p-1 rounded-lg border border-zinc-800">
            {['ALL', MediaType.MOVIE, MediaType.SERIES].map((f) => (
                <button
                    key={f}
                    onClick={() => setFilter(f as any)}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                        filter === f 
                        ? 'bg-zinc-800 text-white shadow-sm' 
                        : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                >
                    {f === 'ALL' ? 'All' : f === MediaType.MOVIE ? 'Movies' : 'Series'}
                </button>
            ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {/* Add Button Card */}
        <button 
            onClick={handleSimulateAdd}
            className="aspect-[2/3] rounded-xl border-2 border-dashed border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/50 flex flex-col items-center justify-center gap-2 text-zinc-500 hover:text-zinc-300 transition-all group"
        >
            <div className="w-10 h-10 rounded-full bg-zinc-800 group-hover:bg-zinc-700 flex items-center justify-center transition-colors">
                <Plus className="w-5 h-5" />
            </div>
            <span className="text-sm font-medium">Add Log</span>
        </button>

        {filteredItems.map((item) => (
          <div key={item.id} className="group relative aspect-[2/3] bg-zinc-900 rounded-xl overflow-hidden shadow-lg border border-zinc-800/50">
            <img 
              src={item.poster} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity" />

            <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <div className="flex justify-between items-start mb-1">
                  <span className="text-[10px] font-bold text-rose-400 bg-rose-500/10 px-1.5 py-0.5 rounded border border-rose-500/20 uppercase tracking-wide">
                    {item.type}
                  </span>
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star className="w-3 h-3 fill-current" />
                    <span className="text-xs font-bold">{item.rating}</span>
                  </div>
              </div>
              <h3 className="text-white font-bold leading-tight mb-1 truncate">{item.title}</h3>
              <p className="text-zinc-400 text-xs line-clamp-2 leading-relaxed">{item.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watchlist;