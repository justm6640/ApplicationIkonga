import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import { authenticate } from './auth.service';

export const authRouter = Router();

authRouter.post('/login', (req, res) => {
  const { email, password } = req.body ?? {};

  if (!email || !password) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      status: StatusCodes.BAD_REQUEST,
      error: 'Email et mot de passe requis.'
    });
  }

  const result = authenticate({ email, password });

  return res.json(result);
});

authRouter.get('/profile/:email', (req, res) => {
  const { email } = req.params;
  const result = authenticate({ email, password: 'placeholder' });
  return res.json(result);
});
