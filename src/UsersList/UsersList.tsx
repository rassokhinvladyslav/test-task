import React from 'react';
import { useGetUsers, useFilterSearch } from './hooks';
import { ListContainer, CentredContainer } from './UsersList.style';
import { CircularProgress, Typography, TextField } from '@mui/material';
import { UsersContext } from './Users.context';
import { User } from '../User';

export const UsersList = () => {
  const { search, handleChange } = useFilterSearch();
  const { users, filteredIds, isLoading, isError } = useGetUsers(search);

  if (isError)
    return (
      <CentredContainer>
        <Typography>Something Went Wrong</Typography>
      </CentredContainer>
    );

  if (isLoading)
    return (
      <CentredContainer>
        <CircularProgress />
      </CentredContainer>
    );

  if (!filteredIds)
    return (
      <CentredContainer>
        <Typography>No Users</Typography>
      </CentredContainer>
    );

  return (
    <CentredContainer>
      <TextField onChange={handleChange} value={search} label={'Search'} />
      <ListContainer>
        <UsersContext users={users}>
          {filteredIds?.map((id) => (
            <User key={id} userId={id} />
          ))}
        </UsersContext>
      </ListContainer>
    </CentredContainer>
  );
};
