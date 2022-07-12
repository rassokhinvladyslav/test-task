import axios from 'axios';
import { useEffect, useState } from 'react';
import { NormalizedUsers, User } from './types';

export const useGetUsers = () => {
  const [users, setUsers] = useState<NormalizedUsers | null>(null);
  const [userIds, setUserIds] = useState<string[] | null>(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fethUsers = async () => {
      try {
        const res = await axios.get<User[]>(
          'https://jsonplaceholder.typicode.com/users'
        );
        const normalizedUsers = res.data.reduce(
          (acc, user) => ({ [user.id]: user }),
          {}
        );
        setUsers(normalizedUsers);
        setUserIds(Object.keys(normalizedUsers));
        setIsLoading(false);
      } catch (err) {
        setIsError(true);
      }
    };

    fethUsers();
  }, []);

  return { userIds, users, isLoading, isError };
};
