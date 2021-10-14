import { Picture } from '@/components';
import { pxToRem } from '@/util/styleUtils';
import styled from 'styled-components';

export const ProfileCommentsHeaderContainer = styled.div`
  display: flex;
  height: ${pxToRem(49)};
  width: 100%;
  max-width: ${pxToRem(875)};
  align-items: center;
  justify-content: flex-end;
  z-index: 999;
`;

export const ProfileCommentsHeaderTitle = styled.h3`
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.l};
`;

export const ProfileCommentsUl = styled.ul<{ containerWidth: number }>`
  margin: 0;
  transform: translateX(-50%);
  position: relative;
  left: 50%;
  min-width: 100vw;
  min-height: 50vh;
  padding: 0
    ${({ containerWidth }) =>
      `calc((100vw - ${pxToRem(containerWidth < 450 ? 450 : 875 < containerWidth ? 875 : containerWidth)}) / 2)`};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileCommentItemWrapper = styled.li`
  display: flex;
  justify-content: stretch;
  align-items: flex-start;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spaceSize.m};
`;

export const ProfileCommentItemContainer = styled.div`
  padding: ${({ theme }) => theme.spaceSize.m};
  background-color: ${({ theme }) => theme.color.darkGray};
  border-radius: ${({ theme }) => theme.borderRadius.s};
  width: 100%;
  position: relative;
  color: ${({ theme }) => theme.color.white};
  p {
    margin: 0;
    white-space: pre-wrap;
    word-break: break-all;
  }
  a {
    color: ${({ theme }) => theme.color.emeraldGreen};
  }
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
  ::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: ${pxToRem(10)};
    border: transparent solid ${pxToRem(5)};
    border-left: ${({ theme }) => theme.color.darkGray} solid ${pxToRem(10)};
    border-right: 0;
    transform-origin: left top;
    transform: translateX(50%) rotate(90deg);
  }
`;

export const ProfileCommentItemThumbnail = styled(Picture)`
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
`;

export const ProfileCommentItemInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.spaceSize.m};
  color: ${({ theme }) => theme.color.lightGray};
  font-size: ${({ theme }) => theme.fontSize.s};
  > span:not(:last-child) {
    margin-right: ${({ theme }) => theme.spaceSize.m};
  }
  svg {
    fill: ${({ theme }) => theme.color.lightGray};
    display: inline-block;
    margin-right: ${({ theme }) => theme.spaceSize.xs};
    vertical-align: ${pxToRem(-1)};
  }
`;
