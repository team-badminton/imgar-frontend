import styled from 'styled-components';

// components
import { Button, Vote } from '@/components';

// utils
import { pxToRem } from '@/util/styleUtils';

// etc
import { HashLink } from 'react-router-hash-link';

export const Container = styled.div`
  grid-area: leftSide;
  height: ${pxToRem(250)};
  position: sticky;
  top: ${pxToRem(250)};
  display: flex;
  width: ${pxToRem(58)};
  flex-direction: column;
`;

export const StyledVote = styled(Vote)`
  border: ${({ theme }) => `${pxToRem(1)} solid ${theme.color.darkGray}`};
  border-radius: ${({ theme }) => theme.borderRadius.s};
`;

export const FavoriteButton = styled(Button)`
  padding: ${({ theme }) => `${theme.spaceSize.r} ${theme.spaceSize.s} ${theme.spaceSize.s}`};
  .img {
    transition: transform 0.4s;
  }
  &:hover {
    .img {
      transform: scale(1.1);
    }
    path {
      stroke: #43d0bd;
    }
  }
`;

export const LinkToComment = styled(HashLink)`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spaceSize.r};
  border: ${({ theme }) => `${pxToRem(1)} solid ${theme.color.darkGray}`};
  border-radius: ${({ theme }) => theme.borderRadius.s};
  margin-top: ${({ theme }) => theme.spaceSize.xl};
  flex-direction: column;
  gap: ${pxToRem(6)};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.xs};

  svg {
    width: ${pxToRem(29)};
    height: ${pxToRem(29)};
    stroke: ${({ theme }) => theme.color.white};
  }
`;
