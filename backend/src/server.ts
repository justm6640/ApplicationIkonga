import cors from 'cors';
import express, { Application } from 'express';
import helmet from 'helmet';

import { errorHandler } from './middleware/error-handler';
import { notFoundHandler } from './middleware/not-found-handler';
import { registerRouters } from './routers';

export const createServer = (): Application => {
  const app = express();

  app.use(helmet());
  app.use(cors());
  app.use(express.json({ limit: '5mb' }));

  registerRouters(app);

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
};
