import { Phase } from './common';

export type UserRole = 'subscriber' | 'coach' | 'admin';

export interface UserProfile {
  id: string;
  email: string;
  fullName: string;
  role: UserRole;
  phase: Phase;
}

export interface HealthProfile {
  userId: string;
  weight: number;
  height: number;
  age: number;
  sex: 'male' | 'female';
  objective: string;
}
