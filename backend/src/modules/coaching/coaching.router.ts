import { Router } from 'express';

import { demoMessages, demoProgress } from '../../data/coaching';
import { demoHealthProfiles, demoUsers } from '../../data/users';

export const coachingRouter = Router();

coachingRouter.get('/dashboard', (_req, res) => {
  const subscribers = demoUsers.filter((user) => user.role === 'subscriber');
  const groupedByPhase = subscribers.reduce<Record<string, number>>((acc, user) => {
    acc[user.phase] = (acc[user.phase] ?? 0) + 1;
    return acc;
  }, {});

  res.json({ totalSubscribers: subscribers.length, groupedByPhase });
});

coachingRouter.get('/subscribers/:id', (req, res) => {
  const user = demoUsers.find((item) => item.id === req.params.id);

  if (!user) {
    return res.status(404).json({ error: 'Utilisateur introuvable' });
  }

  res.json({
    profile: user,
    health: demoHealthProfiles.find((item) => item.userId === user.id) ?? null,
    progress: demoProgress.find((item) => item.userId === user.id) ?? null,
    messages: demoMessages.filter((message) => message.threadId === user.id)
  });
});

coachingRouter.get('/messages', (_req, res) => {
  res.json({ items: demoMessages });
});
