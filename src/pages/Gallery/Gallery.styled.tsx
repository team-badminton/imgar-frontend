import { pxToRem } from '@/util/styleUtils';
import styled from 'styled-components';

export const GalleryContainer = styled.div`
  margin: 0 ${({ theme }) => theme.spaceSize.l};
  padding: 0 ${({ theme }) => theme.spaceSize.l};
  ${({ theme }) => theme.spaceSize.l};
  max-width: ${pxToRem(1250)};
  margin-top: ${pxToRem(30)};
  padding: ${pxToRem(30)};
  margin: 0 auto ${pxToRem(40)};
`;
