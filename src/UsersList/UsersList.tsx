import React from 'react';
import { useGetUsers } from '../useGetUsers';
import { ListContainer, StatusContainer } from './UsersList.style';
import { CircularProgress, Typography } from '@mui/material';
import { UsersContext } from './Users.context';
import { User } from '../User';

export const UsersList = () => {
  const { users, userIds, isLoading, isError } = useGetUsers();

  if (isError)
    return (
      <StatusContainer>
        <Typography>Something Went Wrong</Typography>
      </StatusContainer>
    );

  if (isLoading)
    return (
      <StatusContainer>
        <CircularProgress />
      </StatusContainer>
    );

  if (!userIds)
    return (
      <StatusContainer>
        <Typography>No Users</Typography>
      </StatusContainer>
    );

  return (
    <ListContainer>
      <UsersContext users={users}>
        {userIds.map((id) => (
          <User key={id} userId={id} />
        ))}
      </UsersContext>
    </ListContainer>
  );
};
