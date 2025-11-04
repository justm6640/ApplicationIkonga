import request from 'supertest';

import { createServer } from '../../server';

const app = createServer();

describe('IKONGA Lifestyle API', () => {
  it('exposes health endpoint', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('ok');
  });

  it('returns menus for a given phase', async () => {
    const response = await request(app).get('/api/nutrition/menus/detox');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body.items)).toBe(true);
  });

  it('authenticates a user', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({ email: 'alice@example.com', password: 'secret' });

    expect(response.status).toBe(200);
    expect(response.body.token).toBeDefined();
  });
});
