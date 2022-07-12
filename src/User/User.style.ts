import { Box, styled, Typography } from '@mui/material';

export const UserContainer = styled(Box)(({ theme }) => ({
  minWidth: '20%',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  padding: theme.spacing(4),
  border: '1px solid lightgray',
}));

export const SectionContsiner = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 0, 0, 2),
}));

export const HeadTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  color: theme.palette.grey[800],
  fontSize: '24px',
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[700],
  fontSize: '16px',
}));

export const SubTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[500],
  fontSize: '14px',
}));
