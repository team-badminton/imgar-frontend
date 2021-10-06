import { Button } from '@/components';
import { hexToRgb } from '@/util/styleUtils';
import styled from 'styled-components';

export const StyledButton = styled(Button)`
  font-size: ${({ theme }) => theme.fontSize.xs};
  &:hover {
    background-color: ${({ theme }) => hexToRgb(theme.color.white, 0.12)};
  }
`;

export const Comment = styled.div`
  color: ${({ theme }) => theme.color.white};
`;

export const PostCommentContainer = styled.div`
  .give-emerald {
    display: none;
  }
  &:hover {
    > .give-emerald {
      display: inline-flex;
    }
  }
`;

export const VoteContainer = styled.div`
  display: flex;
`;

export const ChildrenCommentsContainer = styled.div`
  padding-left: ${({ theme }) => theme.spaceSize.xl};
  padding-top: ${({ theme }) => theme.spaceSize.r};
`;
