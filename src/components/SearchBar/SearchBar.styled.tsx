import styled from 'styled-components';
import { pxToRem } from '@/util/styleUtils';
import searchIconUrl from './assets/icon-search.svg';

export const SearchBarContainer = styled.form`
  position: absolute;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: ${pxToRem(3)};
  opacity: 0.8;
  font-weight: bold;
  padding: 0 ${({ theme }) => theme.spaceSize.s};
  &:focus-within {
    opacity: 1;
  }
`;

export const SearchBarButton = styled.button`
  appearance: none;
  border: none;
  background: url(${searchIconUrl}) no-repeat center / contain;
  height: 100%;
  width: ${({ theme }) => theme.spaceSize.l};
`;

export const SearchBarInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  flex-grow: 1;
  padding: ${({ theme }) => theme.spaceSize.s} 0;
  color: ${({ theme }) => theme.color.white};
  &::placeholder {
    font-weight: initial;
    color: ${({ theme }) => theme.color.lightGray};
  }
  &:focus {
    outline: none;
  }
`;
