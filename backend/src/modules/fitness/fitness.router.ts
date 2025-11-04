import { Router } from 'express';

import { demoChallenges, demoWorkouts } from '../../data/fitness';

export const fitnessRouter = Router();

fitnessRouter.get('/workouts/:phase', (req, res) => {
  const workouts = demoWorkouts.filter((workout) => workout.phase === req.params.phase);
  res.json({ items: workouts });
});

fitnessRouter.get('/challenges', (_req, res) => {
  res.json({ items: demoChallenges });
});
