import { Phase } from '../types/common';

export const demoProgress = [
  {
    userId: 'subscriber-1',
    weightEntries: [
      { date: '2025-01-01', weight: 72 },
      { date: '2025-01-08', weight: 70.8 }
    ],
    phaseHistory: [
      { phase: 'detox' as Phase, startedAt: '2025-01-01' }
    ]
  }
];

export const demoMessages = [
  {
    id: 'msg-1',
    threadId: 'thread-1',
    from: 'coach',
    to: 'subscriber',
    content: 'Bravo pour vos efforts cette semaine !',
    createdAt: '2025-01-08T10:00:00Z'
  }
];
