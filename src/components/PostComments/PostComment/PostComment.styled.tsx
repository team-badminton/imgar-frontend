import styled from 'styled-components';

// styles
import { isParentProps } from './PostComment.type';

// components
import { Button } from '@/components';

// utils
import { hexToRgb, pxToRem } from '@/util/styleUtils';

export const StyledButton = styled(Button)`
  font-size: ${({ theme }) => theme.fontSize.xs};
  &:hover {
    background-color: ${({ theme }) => hexToRgb(theme.color.white, 0.12)};
  }
`;

export const Container = styled.div<isParentProps>`
  margin-top: ${({ theme }) => theme.spaceSize.s};
  position: relative;
  .give-emerald {
    display: none;
  }

  ${({ theme, isParent }) => `
    ${
      isParent
        ? `
            ::after {
              width: calc(100% - ${pxToRem(18)});
              margin: 0 auto;
              position: relative;
              bottom: ${pxToRem(-4)};
              content: '';
              height: ${pxToRem(1)};
              display: block;
              background-color: ${theme.color.darkGray};
            }
          `
        : `
            ::after {
              width: ${pxToRem(1)};
              position: absolute;
              content:'';
              bottom: 0;
              left: ${pxToRem(21)};
              height: calc(100% - ${pxToRem(40)});
              background-color: ${theme.color.darkGray};
            }
          `
    }
  `}
`;

export const CommentContainer = styled.div`
  padding: ${pxToRem(9)} ${pxToRem(9)} ${pxToRem(8)} ${pxToRem(9)};
  &:hover {
    border-radius: ${({ theme }) => theme.borderRadius.xxl};
    background-color: ${({ theme }) => theme.color.darkGray};
    > .give-emerald {
      display: inline-flex;
    }
  }
`;

export const VoteContainer = styled.div<isParentProps>`
  display: flex;
  margin-top: ${({ theme }) => theme.spaceSize.xs};
  padding-left: ${({ theme, isParent }) => !isParent && theme.spaceSize.xl};
  .up-btn,
  .down-btn {
    &:hover {
      background-color: ${({ theme }) => hexToRgb(theme.color.white, 0.12)};
    }
  }
`;

export const ChildrenCommentsContainer = styled.div`
  padding-left: ${({ theme }) => theme.spaceSize.xl};
`;

export const Comment = styled.div<isParentProps>`
  padding-left: ${({ theme, isParent }) => !isParent && theme.spaceSize.xl};
  color: ${({ theme }) => theme.color.white};
`;
