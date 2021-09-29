import MainContainer from '@/components/MainContainer/MainContainer';
import UserInfo from '@/components/UserInfo/UserInfo';
import { useAccountQuery } from '@/redux/api/v3';
import React, { ReactElement } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

export default function Profile(): ReactElement {
  const location = useLocation();
  const history = useHistory();
  const { username } = useParams<{ username: string }>();
  const { isSuccess, data } = useAccountQuery(username);
  console.log(data?.notoriety);
  if (isSuccess) {
    return (
      <MainContainer
        headerBackground={data?.coverUrl}
        headerCover={<UserInfo username={data.name} points={data.points} notoriety={data.notoriety} />}
        customHeader={<div style={{ height: 120 }}>높이가 커져라</div>}
        darkenBackground
        customHeaderHeight={120}
        // sticky
      >
        <div style={{ height: '300vh' }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus est, perferendis quidem nesciunt sunt aut
          placeat dolor, adipisci esse corporis accusantium quaerat! Quasi, dolore voluptatem maxime nihil commodi
          reiciendis inventore!
        </div>
      </MainContainer>
    );
  }
  return <div>Loading</div>;
}
