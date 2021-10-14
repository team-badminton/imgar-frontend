import { pxToRem } from '@/util/styleUtils';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const TabNavigationContainer = styled.nav`
  width: 100%;
  height: ${pxToRem(70)};
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const TabNavigationList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.l};
  text-transform: uppercase;
`;
export const TabNavigationItem = styled.li`
  margin: 0 ${pxToRem(7)};
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;
export const TabNavigationLink = styled(NavLink)`
  position: relative;
  padding: ${({ theme }) => theme.spaceSize.s};

  &:focus:not(:focus-visible) {
    outline: none;
  }
  &.active {
    font-weight: bold;
    &::after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: ${pxToRem(0)};
      margin-top: ${({ theme }) => theme.spaceSize.s};
      border-radius: ${({ theme }) => theme.borderRadius.s};
      border: ${pxToRem(2)} solid ${({ theme }) => theme.color.white};
      background-color: ${({ theme }) => theme.color.white};
    }
  }
`;
