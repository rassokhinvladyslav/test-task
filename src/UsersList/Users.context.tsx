import React, { useContext } from 'react';
import { createContext } from 'react';
import { NormalizedUsers } from '../types';

interface UsersContextProps {
  users: NormalizedUsers | null;
  children: React.ReactNode;
}

const usersContext = createContext<NormalizedUsers | null>(null);

export const UsersContext = ({ children, users }: UsersContextProps) => {
  return (
    <usersContext.Provider value={users}>{children}</usersContext.Provider>
  );
};

export const useUserById = (id: string) => {
  const users = useContext(usersContext);

  return users && users[id];
};
