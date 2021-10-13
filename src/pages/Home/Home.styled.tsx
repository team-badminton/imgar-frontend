import styled from 'styled-components';
import { StyledArticleProps } from '@/pages/Home/Home.type';

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
`;

export const StyledWelcomeMessage = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme }) => theme.color.aquaBlue};
  letter-spacing: 0.6px;
`;

export const StyledTagHeading = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.color.white};
  width: 100%;
  margin-left: 4px;
`;

export const StyledArticle = styled.article<StyledArticleProps>`
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: ${({ isOpen }) => (isOpen ? '' : 152 + 'px')};
  overflow: ${({ isOpen }) => (isOpen ? '' : 'hidden')};

  width: ${({ articleWidth }) => articleWidth + 'px'};
  max-width: 2280px;
`;

export const StyledMoreTagsButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  color: ${({ theme }) => theme.color.white};
`;
