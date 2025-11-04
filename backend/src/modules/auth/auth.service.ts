import jwt from 'jsonwebtoken';
import { v4 as uuid } from 'uuid';

import { demoHealthProfiles, demoUsers } from '../../data/users';
import { HealthProfile, UserProfile } from '../../types/user';

const JWT_SECRET = process.env.JWT_SECRET ?? 'dev-secret';

export interface AuthCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  profile: UserProfile;
  health?: HealthProfile;
}

export const authenticate = ({ email }: AuthCredentials): AuthResponse => {
  const user = demoUsers.find((item) => item.email === email);

  if (!user) {
    const newUser: UserProfile = {
      id: uuid(),
      email,
      fullName: email.split('@')[0] ?? 'Nouvel utilisateur',
      role: 'subscriber',
      phase: 'detox'
    };

    demoUsers.push(newUser);

    const healthProfile: HealthProfile = {
      userId: newUser.id,
      weight: 0,
      height: 0,
      age: 0,
      sex: 'female',
      objective: 'À définir avec le coach'
    };

    demoHealthProfiles.push(healthProfile);

    return {
      token: signToken(newUser),
      profile: newUser,
      health: healthProfile
    };
  }

  return {
    token: signToken(user),
    profile: user,
    health: demoHealthProfiles.find((item) => item.userId === user.id)
  };
};

const signToken = (profile: UserProfile): string =>
  jwt.sign(
    {
      sub: profile.id,
      role: profile.role,
      phase: profile.phase
    },
    JWT_SECRET,
    {
      expiresIn: '7d'
    }
  );
