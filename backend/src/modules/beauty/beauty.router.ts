import { Router } from 'express';

import { demoBeautyTips, demoBeautyRoutines } from '../../data/beauty';

export const beautyRouter = Router();

beautyRouter.get('/routines/:phase', (req, res) => {
  res.json({
    items: demoBeautyRoutines.filter((routine) => routine.phase === req.params.phase)
  });
});

beautyRouter.get('/tips', (_req, res) => {
  res.json({ items: demoBeautyTips });
});
