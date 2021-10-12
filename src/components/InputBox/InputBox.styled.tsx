import { pxToRem } from '@/util/styleUtils';
import styled from 'styled-components';

export const StyledLabel = styled.label`
  color: ${({ theme }) => theme.color.white};
  margin-right: ${({ theme }) => theme.spaceSize.s};
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  flex-grow: 1;
  letter-spacing: ${pxToRem(0.4)};
  color: ${({ theme }) => theme.color.white};
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: ${pxToRem(3)};
  opacity: 0.8;
  padding: ${({ theme }) => theme.spaceSize.s};
  &:focus {
    opacity: 1;
  }
  &::placeholder {
    font-weight: initial;
    color: ${({ theme }) => theme.color.lightGray};
  }
  &:focus {
    outline: none;
  }
`;
