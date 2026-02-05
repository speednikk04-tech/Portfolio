import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Disc, BarChart2 } from 'lucide-react';
import { Song } from '../types';

interface MusicProps {
  songs: Song[];
  onAddSong: (song: Song) => void;
}

const Music: React.FC<MusicProps> = ({ songs, onAddSong }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const currentSong = songs.find(s => s.status === 'playing') || songs[0];
  const history = songs.filter(s => s.id !== currentSong?.id);

  // Mock function to simulate adding a song for the portfolio demo
  const handleSimulateAdd = () => {
    const newSong: Song = {
      id: Date.now().toString(),
      title: 'New Sensation',
      artist: 'INXS',
      albumArt: `https://picsum.photos/200/200?random=${Date.now()}`,
      playedAt: new Date().toISOString(),
      status: 'playing'
    };
    onAddSong(newSong);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <Disc className="text-emerald-500" /> On Rotation
        </h2>
        <button 
            onClick={handleSimulateAdd}
            className="text-xs bg-zinc-800 hover:bg-zinc-700 px-3 py-1 rounded-full text-zinc-400 transition-colors"
        >
            + Add Track
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Now Playing Card */}
        {currentSong && (
          <div className="bg-gradient-to-br from-emerald-900/80 to-zinc-900 border border-emerald-500/20 rounded-2xl p-6 flex flex-col justify-between h-full relative overflow-hidden group">
            {/* Animated Background Effect */}
            <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
                <BarChart2 className="w-48 h-48 text-emerald-500 animate-pulse" />
            </div>

            <div className="flex items-start gap-4 z-10">
              <img 
                src={currentSong.albumArt} 
                alt={currentSong.title} 
                className={`w-24 h-24 rounded-lg shadow-lg object-cover ${isPlaying ? 'animate-[spin_10s_linear_infinite]' : ''}`}
              />
              <div>
                <span className="text-emerald-400 text-xs font-bold tracking-wider uppercase mb-1 block">Now Playing</span>
                <h3 className="text-xl font-bold text-white leading-tight mb-1">{currentSong.title}</h3>
                <p className="text-zinc-400">{currentSong.artist}</p>
              </div>
            </div>

            <div className="mt-8 space-y-4 z-10">
              {/* Fake Progress Bar */}
              <div className="w-full bg-zinc-800/50 rounded-full h-1.5 overflow-hidden">
                <div className="bg-emerald-500 h-full w-2/3 rounded-full relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow" />
                </div>
              </div>
              
              {/* Controls */}
              <div className="flex justify-center items-center gap-6 text-zinc-300">
                <button className="hover:text-white transition"><SkipBack className="w-5 h-5" /></button>
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:scale-105 transition shadow-lg shadow-white/10"
                >
                  {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-1" />}
                </button>
                <button className="hover:text-white transition"><SkipForward className="w-5 h-5" /></button>
              </div>
            </div>
          </div>
        )}

        {/* Recently Played List */}
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 h-full flex flex-col">
          <h3 className="text-zinc-400 text-sm font-semibold uppercase tracking-wider mb-4">Recently Played</h3>
          <div className="space-y-4 overflow-y-auto max-h-[200px] pr-2 custom-scrollbar">
            {history.map((song) => (
              <div key={song.id} className="flex items-center gap-3 group p-2 rounded-lg hover:bg-zinc-800/50 transition-colors">
                 <div className="relative">
                    <img 
                      src={song.albumArt} 
                      alt={song.title} 
                      className="w-12 h-12 rounded bg-zinc-800 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 hidden group-hover:flex items-center justify-center rounded">
                        <Play className="w-4 h-4 text-white fill-current" />
                    </div>
                 </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-medium truncate">{song.title}</h4>
                  <p className="text-zinc-500 text-sm truncate">{song.artist}</p>
                </div>
                <span className="text-zinc-600 text-xs whitespace-nowrap">
                    {new Date(song.playedAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </span>
              </div>
            ))}
            {history.length === 0 && (
                <p className="text-zinc-600 text-sm italic">No history yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;