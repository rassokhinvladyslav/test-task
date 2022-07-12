import axios from 'axios';
import { useEffect, useState } from 'react';
import { User } from './types';

export const useGetUsers = () => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fethUsers = async () => {
      try {
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        );
        setUsers(res.data);
        setIsLoading(false);
      } catch (err) {
        setIsError(true);
      }
    };

    fethUsers();
  }, []);

  return { users, isLoading, isError };
};
