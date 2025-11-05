import { config } from 'dotenv';

import { createServer } from './server';

config();

const port = process.env.PORT ?? '4000';

const app = createServer();

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`IKONGA Lifestyle API listening on port ${port}`);
});
