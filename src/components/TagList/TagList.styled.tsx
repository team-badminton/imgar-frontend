import { pxToRem } from '@/util/styleUtils';
import styled from 'styled-components';
import { TAG_GAP } from '../TagCard/TagCard.styled';
import { StyledArticleProps } from './TagList.type';

export const StyledTagHeading = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.color.white};
  width: 100%;
  margin-left: ${pxToRem(TAG_GAP)};
`;

export const StyledArticle = styled.article<StyledArticleProps>`
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: ${({ isOpen }) => (isOpen ? '' : 156 + 'px')};
  overflow: ${({ isOpen }) => (isOpen ? '' : 'hidden')};
  width: ${({ articleWidth }) => articleWidth + 'px'};
  max-width: 2280px;
`;

export const StyledMoreTagsButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  color: ${({ theme }) => theme.color.white};
  font-weight: 700;
  margin-right: ${pxToRem(TAG_GAP)};
`;
