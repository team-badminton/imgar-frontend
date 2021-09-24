import React, { ReactElement } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

export default function Profile(): ReactElement {
  const location = useLocation();
  const history = useHistory();
  const param = useParams<{ username: string }>();
  return <div>{param.username}</div>;
}
