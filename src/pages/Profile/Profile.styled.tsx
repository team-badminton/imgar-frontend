import { pxToRem } from '@/util/styleUtils';
import styled from 'styled-components';

export const ProfileCoverContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 10;
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
  padding: 0 ${({ containerWidth }) => `calc((100vw - ${pxToRem(containerWidth < 450 ? 450 : containerWidth)}) / 2)`};
  margin-bottom: -1px;
`;

export const Notice = styled.div`
  font-size: ${pxToRem(24)};
  color: ${({ theme }) => theme.color.lightGray};
  font-weight: bold;
  margin-top: calc(${({ theme }) => theme.spaceSize.xl} * 2);
  text-align: center;
`;
