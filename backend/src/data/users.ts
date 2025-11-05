import { v4 as uuid } from 'uuid';

import { HealthProfile, UserProfile } from '../types/user';

export const demoUsers: UserProfile[] = [
  {
    id: uuid(),
    email: 'alice@example.com',
    fullName: 'Alice Demo',
    role: 'subscriber',
    phase: 'detox'
  },
  {
    id: uuid(),
    email: 'coach.rosy@ikonga.com',
    fullName: 'Rosy Mekomou',
    role: 'coach',
    phase: 'equilibre'
  }
];

export const demoHealthProfiles: HealthProfile[] = demoUsers
  .filter((user) => user.role === 'subscriber')
  .map((user) => ({
    userId: user.id,
    weight: 72,
    height: 168,
    age: 32,
    sex: 'female',
    objective: 'Perdre 6kg en 12 semaines'
  }));
