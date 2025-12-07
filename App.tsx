import React from 'react';
import TreeScene from './components/TreeScene';
import GestureController from './components/GestureController';
import { useAppStore } from './store';
import { TreeState } from './types';

function App() {
  const { treeState, setTreeState, gesture } = useAppStore();

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <TreeScene />
      
      {/* UI Overlay */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none p-8 flex flex-col justify-between">
        
        {/* Header */}
        <div className="flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl text-[#cfb53b] font-bold tracking-widest drop-shadow-[0_0_15px_rgba(207,181,59,0.5)] text-center">
            GRAND LUXURY
          </h1>
          <h2 className="text-xl md:text-2xl text-white font-light tracking-[0.5em] mt-2 uppercase text-center">
            Interactive Christmas Tree
          </h2>
        </div>

        {/* Status Indicator */}
        <div className="absolute top-1/2 left-8 -translate-y-1/2 flex flex-col gap-4">
           <div className={`transition-all duration-700 border-l-2 pl-4 ${treeState === TreeState.CHAOS ? 'border-[#cfb53b] opacity-100' : 'border-gray-800 opacity-40'}`}>
              <span className="text-[#cfb53b] text-sm uppercase tracking-widest block">State</span>
              <span className="text-3xl font-serif text-white">CHAOS</span>
           </div>
           <div className={`transition-all duration-700 border-l-2 pl-4 ${treeState === TreeState.FORMED ? 'border-[#cfb53b] opacity-100' : 'border-gray-800 opacity-40'}`}>
              <span className="text-[#cfb53b] text-sm uppercase tracking-widest block">State</span>
              <span className="text-3xl font-serif text-white">FORMED</span>
           </div>
           
           <div className="mt-8">
              <span className="text-gray-500 text-xs uppercase tracking-widest block">Detected Gesture</span>
              <span className="text-xl font-mono text-white animate-pulse">{gesture}</span>
           </div>
        </div>

        {/* Manual Controls (For non-camera users) */}
        <div className="pointer-events-auto self-center mb-8 flex gap-4">
          <button 
            onClick={() => setTreeState(TreeState.CHAOS)}
            className={`px-8 py-3 border border-[#cfb53b] text-[#cfb53b] font-serif uppercase tracking-widest hover:bg-[#cfb53b] hover:text-black transition-all duration-300 ${treeState === TreeState.CHAOS ? 'bg-[#cfb53b] text-black' : 'bg-transparent'}`}
          >
            Unleash Chaos
          </button>
          <button 
            onClick={() => setTreeState(TreeState.FORMED)}
            className={`px-8 py-3 border border-[#cfb53b] text-[#cfb53b] font-serif uppercase tracking-widest hover:bg-[#cfb53b] hover:text-black transition-all duration-300 ${treeState === TreeState.FORMED ? 'bg-[#cfb53b] text-black' : 'bg-transparent'}`}
          >
            Form Tree
          </button>
        </div>
      </div>

      <GestureController />
    </div>
  );
}

export default App;
