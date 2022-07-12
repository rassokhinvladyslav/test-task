import React, { memo } from 'react';
import { useUserById } from '../UsersList';
import {
  HeadTitle,
  SectionContsiner,
  SectionTitle,
  SubTitle,
  UserContainer,
} from './User.style';

interface UserProps {
  userId: string;
}

export const User: React.FC<UserProps> = memo(({ userId }) => {
  const user = useUserById(userId);

  return (
    <UserContainer>
      <HeadTitle>{user?.name}</HeadTitle>

      <SectionTitle>Contacts</SectionTitle>
      <SectionContsiner>
        <SubTitle>{user?.email}</SubTitle>
        <SubTitle>{user?.phone}</SubTitle>
      </SectionContsiner>
      <SectionTitle>Address</SectionTitle>
      <SectionContsiner>
        <SubTitle>
          {user?.address.city} {user?.address.suite} {user?.address.zipcode}
        </SubTitle>
        <SubTitle>{user?.phone}</SubTitle>
      </SectionContsiner>
    </UserContainer>
  );
});
