import styled from 'styled-components';
import { StyledArticleProps } from '@/pages/Home/Home.type';

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: ${({ articleWidth }) => articleWidth + 'px'};
  padding-bottom: 100px;
`;
