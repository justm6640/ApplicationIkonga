import { Phase } from '../types/common';

export const demoPosts = [
  {
    id: 'post-1',
    author: 'alice@example.com',
    content: 'Jour 3 terminé, je me sens pleine d\'énergie !',
    phase: 'detox' as Phase,
    createdAt: '2025-01-03T18:30:00Z',
    likes: 8
  }
];

export const demoComments = [
  {
    id: 'comment-1',
    postId: 'post-1',
    author: 'coach.rosy@ikonga.com',
    content: 'Bravo Alice, continue comme ça !',
    createdAt: '2025-01-03T19:00:00Z'
  }
];

export const demoLeaderboard = [
  {
    user: 'alice@example.com',
    points: 120,
    badge: 'Ambassadrice Detox'
  }
];
