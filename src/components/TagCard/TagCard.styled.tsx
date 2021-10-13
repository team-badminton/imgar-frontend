import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { StyledArticleProps, StyledTagCardLinkProps } from './TagCrad.type';

export const StyledTagCardLink = styled(Link)<StyledTagCardLinkProps>`
  width: ${({ $isFeatured }) => ($isFeatured ? 228 + 'px' : 110 + 'px')};
  height: 130px;
  display: inline-block;
  position: relative;
  color: white;
  background-image: url(https://i.imgur.com/${({ $backgroundImageId }) =>
    $backgroundImageId}_d.jpg?maxwidth=800&shape=thumb&fidelity=high);
  background-size: auto 115px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.s};
  margin: ${({ theme }) => theme.spaceSize.xs};
  order: ${({ $isFeatured }) => ($isFeatured ? -1 : 0)};
`;

export const StyledArticle = styled.article<StyledArticleProps>`
  padding: ${({ theme }) => theme.spaceSize.r};
  word-break: break-word;
  position: absolute;
  bottom: 0;
  font-weight: 700;
  background: ${({ theme, accentColor }) => (accentColor ? '#' + accentColor : theme.color.primaryColor)};
  width: 100%;
  h3 {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  p {
    font-size: ${({ theme }) => theme.fontSize.xs};
    opacity: 0.7;
  }
  em {
    font-style: normal;
  }
  em::after {
    content: ' • ';
  }
`;
