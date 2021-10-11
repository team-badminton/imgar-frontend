import { useEffect, useState } from 'react';

export default function useDomReady(): boolean {
  const [domReady, setDomReady] = useState<boolean>(false);
  useEffect(() => {
    setDomReady(true);
  }, []);
  return domReady;
}
