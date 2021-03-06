import styled from 'styled-components';

// components
import { Button } from '@/components';

// utils
import { hexToRgb } from '@/util/styleUtils';

export const StyledMoreButton = styled(Button)`
  background-color: ${({ theme }) => `${hexToRgb(theme.color.black, 0.2)}`};
  height: initial;
  padding: initial;
  .img {
    width: initial;
    height: initial;
  }
  :hover {
    background-color: ${({ theme }) => `${hexToRgb(theme.color.black, 0.4)}`};
  }
`;
