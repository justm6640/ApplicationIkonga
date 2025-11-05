import { Phase } from '../types/common';

export const demoMeditations = [
  {
    id: 'med-1',
    title: 'Respiration detox',
    duration: 10,
    audioUrl: 'https://storage.googleapis.com/ikonga/audio/respiration.mp3',
    objectives: ['relaxation', 'focus']
  }
];

export const demoSleepRoutines = [
  {
    id: 'sleep-1',
    title: 'Routine nuit réparatrice',
    steps: ['Éteindre les écrans 1h avant', 'Infusion relaxante', '5 minutes de respiration'],
    phase: 'detox' as Phase
  }
];

export const demoHabits = [
  {
    id: 'habit-1',
    pillar: 'Hydratation',
    description: 'Boire 8 verres d\'eau',
    phase: 'detox' as Phase
  }
];
