import { pxToRem } from '@/util/styleUtils';
import styled from 'styled-components';
import { DescriptionItemParagraphProps } from './ProfileAbout.type';

export const ProfileAboutContainer = styled.div`
  display: flex;
  width: 100%;
  /* margin-top: calc(${({ theme }) => theme.spaceSize.l} + ${pxToRem(75)}); */
`;

export const ProfileAboutDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: ${pxToRem(320)};
  padding-right: ${pxToRem(25)};
  word-wrap: break-word;
  white-space: pre-wrap;
  @media (max-width: ${pxToRem(1185)}) {
    width: ${pxToRem(150)};
  }
`;

export const ProfileAboutH3 = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.color.lightBlue};
  font-weight: bold;
  margin: 0;
  @media (max-width: ${pxToRem(1185)}) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

export const DescriptionItemContainer = styled.div`
  margin-top: ${pxToRem(40)};
  color: ${({ theme }) => theme.color.white};
`;

export const DescriptionItemParagraph = styled.p<DescriptionItemParagraphProps>`
  font-size: ${({ large, theme }) => (large ? pxToRem(28) : theme.fontSize.m)};
  ${({ large }) => (large ? `font-weight: bold;` : null)}
  margin: 0;
  margin-top: ${({ theme, large }) => (large ? theme.spaceSize.s : theme.spaceSize.m)};
  a {
    color: ${({ theme }) => theme.color.emeraldGreen};
  }

  @media (max-width: ${pxToRem(1185)}) {
    font-size: ${({ theme, large }) => (large ? theme.fontSize.l : null)};
  }
`;

export const ProfileAboutGrid = styled.ul<{ itemWidth: number }>`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, ${({ itemWidth }) => pxToRem(itemWidth)});
  grid-auto-rows: auto;
  align-content: start;
  justify-items: center;
  align-items: start;
  padding: 0;
  margin: 0;
`;

export const ProfileAboutGridItem = styled.li<{ innerItemWidth: number; marginTop?: number }>`
  text-align: center;
  margin-top: ${({ theme, marginTop }) => (marginTop ? pxToRem(marginTop) : theme.spaceSize.l)};
  width: ${({ innerItemWidth }) => pxToRem(innerItemWidth)};
  p {
    font-size: ${pxToRem(13)};
    margin-bottom: 0;
  }
`;
