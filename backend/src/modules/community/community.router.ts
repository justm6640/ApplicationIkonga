import { Router } from 'express';

import { demoComments, demoLeaderboard, demoPosts } from '../../data/community';

export const communityRouter = Router();

communityRouter.get('/posts', (_req, res) => {
  res.json({ items: demoPosts });
});

communityRouter.get('/posts/:id/comments', (req, res) => {
  res.json({ items: demoComments.filter((comment) => comment.postId === req.params.id) });
});

communityRouter.get('/leaderboard', (_req, res) => {
  res.json({ items: demoLeaderboard });
});
