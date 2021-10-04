import { pxToRem } from '@/util/styleUtils';
import styled from 'styled-components';

export const StyledModal = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    border: ${pxToRem(5)} solid #fff;
    border-radius: ${({ theme }) => theme.borderRadius.xl};
  }
`;
