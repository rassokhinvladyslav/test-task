import { useState, useCallback } from 'react';

export const useFilterSearch = () => {
  const [search, setSearch] = useState('');

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value),
    []
  );

  return { search, handleChange };
};
