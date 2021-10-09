import { pxToRem } from '@/util/styleUtils';
import styled from 'styled-components';

export const ProfileCoverContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const ProfileCoverWrapper = styled.div<{ containerWidth: number }>`
  transform: translateX(-50%);
  position: relative;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.color.backgroundDarkNavy};
  width: 100vw;
  padding: 0 ${({ containerWidth }) => `calc((100vw - ${pxToRem(containerWidth)}) / 2)`};
`;
