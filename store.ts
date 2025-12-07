import { create } from 'zustand';
import { TreeState } from './types';

interface AppState {
  treeState: TreeState;
  targetProgress: number; // 0 for CHAOS, 1 for FORMED
  handPosition: { x: number; y: number }; // Normalized -1 to 1
  isWebcamActive: boolean;
  gesture: string;
  
  setTreeState: (state: TreeState) => void;
  updateHandPosition: (x: number, y: number) => void;
  setWebcamActive: (active: boolean) => void;
  setGesture: (gesture: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  treeState: TreeState.FORMED,
  targetProgress: 1,
  handPosition: { x: 0, y: 0 },
  isWebcamActive: false,
  gesture: 'None',

  setTreeState: (state) => set({ 
    treeState: state, 
    targetProgress: state === TreeState.FORMED ? 1 : 0 
  }),
  
  updateHandPosition: (x, y) => set({ handPosition: { x, y } }),
  
  setWebcamActive: (active) => set({ isWebcamActive: active }),
  
  setGesture: (gesture) => set({ gesture })
}));
