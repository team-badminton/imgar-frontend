import styled from 'styled-components';

// utils
import { pxToRem, hexToRgb } from '@/util/styleUtils';

export const Container = styled.li`
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

export const NoThumbnail = styled.span`
  width: ${pxToRem(64)};
  height: ${pxToRem(64)};
  padding: ${pxToRem(10)};
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.s};
  text-align: center;
  background: ${({ theme }) => theme.color.darkGray};
`;
