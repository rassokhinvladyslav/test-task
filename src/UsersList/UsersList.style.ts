import { Box, styled } from '@mui/material';

export const ListContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gridAutoRows: 'repeat(2, 1fr)',
  gap: theme.spacing(4),
}));

export const StatusContainer = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
