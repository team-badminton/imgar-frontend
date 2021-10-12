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

export const RelativeItem = styled.li`
  display: flex;
  gap: ${pxToRem(8)};
  align-items: center;
  margin-bottom: ${pxToRem(16)};
  img {
    transition: ease 0.4s;
  }
  &:hover {
    .item-title {
      color: ${({ theme }) => theme.color.white};
    }
    img {
      transform: scale(1.1);
    }
  }
`;

export const ImageContainer = styled.div`
  height: ${pxToRem(64)};
  flex-shrink: 0;
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  overflow: hidden;
  font-size: ${pxToRem(14)};
  line-height: ${pxToRem(18)};
  letter-spacing: 0.01em;
  order: -1;
  color: ${({ theme }) => theme.color.white};
  .image-count {
    font-weight: 700;
    background: ${({ theme }) => theme.color.backgroundGray};
    opacity: 0.9;
    border-radius: ${({ theme }) => theme.borderRadius.s};
    text-shadow: ${({ theme }) => `0 ${pxToRem(1)} ${pxToRem(2)} ${hexToRgb(theme.color.black, 0.4)}`};
    text-align: center;
    font-size: ${pxToRem(10)};
    line-height: ${pxToRem(10)};
    position: absolute;
    left: ${pxToRem(41)};
    top: ${pxToRem(4)};
    width: ${pxToRem(19)};
    height: ${pxToRem(15)};
    padding: ${pxToRem(3)};
    z-index: 1;
  }
`;
