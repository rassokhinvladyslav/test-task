import { useGetUsers } from '../useGetUsers';
import { ListContainer, StatusContainer } from './UsersList.style';
import { CircularProgress, Typography } from '@mui/material';

export const UsersList = () => {
  const { users, isLoading, isError } = useGetUsers();

  if (!isError)
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

  if (!users)
    return (
      <StatusContainer>
        <Typography>No Users</Typography>
      </StatusContainer>
    );

  return <ListContainer>{}</ListContainer>;
};
