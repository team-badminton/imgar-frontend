import React, { ReactElement, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export default function SearchResult(): ReactElement {
  const location = useLocation();
  const history = useHistory();
  const searchQuery = useMemo(() => new URLSearchParams(location.search).get('q'), [location.search]);

  return <div>{searchQuery}</div>;
}
