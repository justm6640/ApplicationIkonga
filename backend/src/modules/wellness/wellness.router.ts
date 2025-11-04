import { Router } from 'express';

import { demoHabits, demoMeditations, demoSleepRoutines } from '../../data/wellness';

export const wellnessRouter = Router();

wellnessRouter.get('/meditations', (_req, res) => {
  res.json({ items: demoMeditations });
});

wellnessRouter.get('/sleep-routines/:phase', (req, res) => {
  res.json({ items: demoSleepRoutines.filter((item) => item.phase === req.params.phase) });
});

wellnessRouter.get('/habits/:phase', (req, res) => {
  res.json({ items: demoHabits.filter((item) => item.phase === req.params.phase) });
});
