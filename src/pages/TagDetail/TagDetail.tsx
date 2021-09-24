import React, { ReactElement } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

export default function TagDetail(): ReactElement {
  const location = useLocation();
  const history = useHistory();
  const param = useParams<{ tagname: string }>();
  return <div>{param.tagname}</div>;
}
