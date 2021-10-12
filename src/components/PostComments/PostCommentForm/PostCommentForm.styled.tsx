import styled from 'styled-components';

// types
import { Color } from './PostCommentForm.type';

// utils
import { a11yHidden, hexToRgb, pxToRem } from '@/util/styleUtils';

export const StyledForm = styled.form`
  border: ${pxToRem(1)} solid #585d6a;
  border-radius: ${pxToRem(6)};
  margin-top: ${pxToRem(33)};
`;

export const StyledTextArea = styled.textarea<Color>`
  min-height: ${pxToRem(90)};
  background-color: #33353b;
  padding: ${({ theme }) => theme.spaceSize.r};
  border-radius: inherit;
  &,
  &:focus {
    border: none;
    border-style: none;
    overflow: auto;
    outline: none;
    resize: none;
  }
  color: ${({ color, theme }) => (color ? theme.color[color] : theme.color.white)};
  font-family: Proxima Nova Regular, Helvetica Neue, Helvetica, Arial, sans-serif;
  width: 100%;
`;

export const Controlers = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.color.lightGray};
  height: ${pxToRem(50)};
  align-items: center;
  padding: ${({ theme }) => `0 ${theme.spaceSize.m}`}; ;
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${pxToRem(14)};
`;

export const ImageUploadButtonContainer = styled.div`
  position: relative;
  > label {
    cursor: pointer;
  }
  > input {
    ${a11yHidden}
  }
  svg {
    vertical-align: middle;
  }
`;

export const TextCounter = styled.span<Color>`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ color, theme }) => color && theme.color[color]};
`;

export const PostButton = styled.button<Color>`
  color: ${({ theme, color }) => (color ? theme.color.white : theme.color.lightGray)};
  background-color: ${({ theme, color }) => (color ? theme.color[color] : theme.color.darkGray)};
  height: ${pxToRem(26)};
  width: ${pxToRem(61)};
  font-weight: 800;
  box-shadow: ${({ theme }) => `0 ${pxToRem(3)} ${pxToRem(4)} ${hexToRgb(theme.color.black, 0.12)}`};
  border-radius: ${({ theme }) => theme.borderRadius.s};
  text-align: center;
  line-height: ${pxToRem(14)};
  font-size: ${({ theme }) => theme.fontSize.s};
  padding: ${pxToRem(7)} ${pxToRem(14)} ${pxToRem(6)} ${pxToRem(12)};
`;
