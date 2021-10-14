import styled from 'styled-components';

// utils
import { hexToRgb, pxToRem } from '@/util/styleUtils';

export const Title = styled.h3`
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 900;
  text-transform: uppercase;
  border-bottom: ${pxToRem(1)} solid ${({ theme }) => theme.color.darkGray};
  padding-bottom: ${pxToRem(6)};
  margin-bottom: ${pxToRem(16)};
`;

export const Container = styled.ul`
  height: ${pxToRem(320)};
  overflow: hidden scroll;
  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  &::-webkit-scrollbar {
    width: ${pxToRem(6)};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${({ theme }) => theme.color.lightGray};
  }
  scrollbar-color: ${({ theme }) => theme.color.lightGray};
  scrollbar-width: thin;

  .item-title {
    color: ${({ theme }) => theme.color.deepLightGray};
  }
`;
