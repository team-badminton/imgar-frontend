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

export const ProfileCommentsUl = styled.ul`
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: ${pxToRem(875)};
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
`;

export const ProfileCommentItemThumbnail = styled(Picture)`
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  margin-right: ${({ theme }) => theme.spaceSize.m};
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
  flex-shrink: 0;
`;
