import axios from 'axios';
import { useEffect, useState } from 'react';
import { NormalizedUser, User } from './types';

export const useGetUsers = () => {
  const [users, setUsers] = useState<NormalizedUser[] | null>(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fethUsers = async () => {
      try {
        const res = await axios.get<User[]>(
          'https://jsonplaceholder.typicode.com/users'
        );
        const normalizedUsers = res.data.map((user) => ({ [user.id]: user }));
        setUsers(normalizedUsers);
        setIsLoading(false);
      } catch (err) {
        setIsError(true);
      }
    };

    fethUsers();
  }, []);

  return { users, isLoading, isError };
};
