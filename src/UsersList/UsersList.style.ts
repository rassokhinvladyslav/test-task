import { Box, styled } from '@mui/material';

export const ListContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: theme.spacing(4),
}));

export const StatusContainer = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
