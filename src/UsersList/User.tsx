import React from 'react';
import { useUserById } from './Users.context';

interface UserProps {
  userId: string;
}

export const User: React.FC<UserProps> = ({ userId }) => {
  const user = useUserById(userId);

  return <h1>{user?.name}</h1>;
};
