import React from 'react';
import { Brain } from 'lucide-react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar, Tooltip } from 'recharts';
import { Skill } from '../types';

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  // Determine text color based on active theme logic - defaulting to zinc-400 for grid
  
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-zinc-900 border border-zinc-700 p-2 rounded shadow-xl">
          <p className="text-indigo-400 font-bold text-sm">{label}</p>
          <p className="text-white text-xs">Proficiency: {payload[0].value}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <Brain className="text-indigo-500" /> Tech Stack
        </h2>
        <p className="text-zinc-400 leading-relaxed">
            I specialize in building scalable web applications. My expertise spans across the entire JavaScript ecosystem, with a heavy focus on performance and user experience.
        </p>
        
        <div className="grid grid-cols-2 gap-4">
            {skills.slice(0, 4).map(skill => (
                <div key={skill.name} className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl">
                    <div className="flex justify-between items-end mb-2">
                        <span className="text-zinc-200 font-medium text-sm">{skill.name}</span>
                        <span className="text-indigo-400 text-xs font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                        <div 
                            className="bg-indigo-500 h-full rounded-full transition-all duration-1000" 
                            style={{ width: `${skill.level}%` }}
                        />
                    </div>
                </div>
            ))}
        </div>
      </div>

      <div className="h-[300px] w-full bg-zinc-900/30 rounded-2xl border border-zinc-800/50 flex items-center justify-center relative">
         <div className="absolute inset-0 bg-indigo-500/5 blur-3xl rounded-full" />
         <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={skills}>
              <PolarGrid stroke="#3f3f46" />
              <PolarAngleAxis dataKey="name" tick={{ fill: '#a1a1aa', fontSize: 12 }} />
              <Radar
                name="Skill Level"
                dataKey="level"
                stroke="#6366f1"
                fill="#6366f1"
                fillOpacity={0.4}
              />
              <Tooltip content={<CustomTooltip />} />
            </RadarChart>
          </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Skills;