export enum TreeState {
  CHAOS = 'CHAOS',
  FORMED = 'FORMED'
}

export interface Vector3Like {
  x: number;
  y: number;
  z: number;
}

export interface OrnamentData {
  id: number;
  chaosPos: [number, number, number];
  targetPos: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  color: string;
  type: 'box' | 'ball' | 'light';
  weight: number; // 0.1 (light) to 1.0 (heavy)
}

export interface PolaroidData {
  id: number;
  url: string;
  chaosPos: [number, number, number];
  targetPos: [number, number, number];
  rotation: [number, number, number];
}

export type GestureType = 'None' | 'Closed_Fist' | 'Open_Palm';
