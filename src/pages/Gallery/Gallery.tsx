import React, { ReactElement } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

export default function Gallery(): ReactElement {
  const location = useLocation();
  const history = useHistory();
  const param = useParams<{ id: string }>();
  return <div>{param.id}</div>;
}
