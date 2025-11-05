import { Phase } from '../types/common';

export interface Workout {
  id: string;
  phase: Phase;
  level: 'debutant' | 'intermediaire' | 'avance';
  duration: number;
  title: string;
  videoUrl: string;
}

export const demoWorkouts: Workout[] = [
  {
    id: 'w1',
    phase: 'detox',
    level: 'debutant',
    duration: 25,
    title: 'Detox Flow Yoga',
    videoUrl: 'https://youtu.be/demo'
  }
];

export const demoChallenges = [
  {
    id: 'challenge-1',
    title: 'Planche 5 jours',
    description: 'Augmentez votre temps de gainage chaque jour.',
    phase: 'detox' as Phase
  }
];
