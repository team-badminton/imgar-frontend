import styled from 'styled-components';

// components
import { Button } from '@/components';

// types
import { StyledTagProps } from './PostContents.type';
import { pxToRem } from '@/util/styleUtils';

export const StyledTag = styled(Button)<StyledTagProps>`
  background: ${({ backgroundImageId }) =>
    `url(https://i.imgur.com/${backgroundImageId}_d.jpg?maxwidth=200&fidelity=grand)`};
  padding: ${({ theme }) => `${theme.spaceSize.s} ${pxToRem(30)}`};
  border-radius: ${pxToRem(54)};
  font-size: ${({ theme }) => theme.fontSize.s};
  line-height: ${pxToRem(20)};
  height: initial;
  text-shadow: ${({ theme }) => `0 ${pxToRem(1)} ${pxToRem(4)} ${theme.color.black}`};
  font-weight: 400;
  box-shadow: ${({ theme }) => `0 ${pxToRem(5)} ${pxToRem(5)} ${theme.color.black}`};
  margin-top: ${pxToRem(10)};
  margin-right: ${pxToRem(10)};
`;
