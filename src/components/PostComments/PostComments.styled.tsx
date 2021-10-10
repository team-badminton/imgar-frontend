import styled from 'styled-components';
import { Button } from '@/components';
import { pxToRem } from '@/util/styleUtils';

export const Container = styled.div`
  .dropdown {
    position: relative;
    margin-right: ${pxToRem(15)};
    margin-left: ${pxToRem(30)};
    font-size: ${pxToRem(14)} !important;
    color: ${({ theme }) => theme.color.lightGray} !important;
    &::after {
      content: '';
      background: url('https://s.imgur.com/desktop-assets/desktop-assets/chevron-down-w.2cb2334cccdb7201bd1b686b3a482f09.svg');
      position: absolute;
      width: ${pxToRem(15)};
      height: ${pxToRem(15)};
      bottom: ${pxToRem(2)};
    }
  }
`;

export const Title = styled.h3`
  flex-grow: 1;
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.color.white};
`;

export const StyledButton = styled(Button)`
  gap: ${({ theme }) => theme.spaceSize.s};
  font-size: ${pxToRem(14)};
  color: ${({ theme }) => theme.color.lightGray};
  .text {
    order: -1;
  }
`;

export const LoadMoreButton = styled(Button)`
  font-family: Proxima Nova Bold, Helvetica Neue, Helvetica, Arial, sans-serif;
  border: ${({ theme }) => `${pxToRem(2)} solid ${theme.color.blue}`};
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin: ${({ theme }) => theme.spaceSize.m} auto 0;
  text-align: center;
  max-width: ${pxToRem(320)};
  width: 100%;
  height: ${pxToRem(46)};
  .text {
    order: -1;
  }
`;
