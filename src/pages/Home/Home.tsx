import React, { ReactElement } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { StyledHome } from './Home.styled';

export default function Home(): ReactElement {
  return <StyledHome>Home</StyledHome>;
}
