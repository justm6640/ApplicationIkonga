import { Application } from 'express';

import { authRouter } from '../modules/auth/auth.router';
import { beautyRouter } from '../modules/beauty/beauty.router';
import { coachingRouter } from '../modules/coaching/coaching.router';
import { communityRouter } from '../modules/community/community.router';
import { fitnessRouter } from '../modules/fitness/fitness.router';
import { nutritionRouter } from '../modules/nutrition/nutrition.router';
import { wellnessRouter } from '../modules/wellness/wellness.router';
import { healthRouter } from './system.router';

export const registerRouters = (app: Application): void => {
  app.use('/health', healthRouter);
  app.use('/api/auth', authRouter);
  app.use('/api/nutrition', nutritionRouter);
  app.use('/api/fitness', fitnessRouter);
  app.use('/api/wellness', wellnessRouter);
  app.use('/api/beauty', beautyRouter);
  app.use('/api/coaching', coachingRouter);
  app.use('/api/community', communityRouter);
};
