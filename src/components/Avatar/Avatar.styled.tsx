import styled from 'styled-components';
import { pxToRem } from '@/util/styleUtils';
import { Link } from 'react-router-dom';

export interface Props {
  infoLines?: 1 | 2 | 3;
  size?: 'small' | 'medium' | 'large';
}

export const StyledAvatar = styled.div<Props>`
  display: flex;
  font-size: ${() => pxToRem(12)};
  align-items: center;
  img {
    margin-top: ${pxToRem(1)};
    margin-right: ${({ size }) => (size === 'small' ? pxToRem(8) : size === 'medium' ? pxToRem(12) : pxToRem(24))};
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }
  .give-emerald {
    padding: 0 ${pxToRem(5)};
    margin-left: ${pxToRem(7)};
  }
`;

export const Info = styled.div`
  display: flex;
  width: ${pxToRem(300)};
  flex-wrap: wrap;
  align-items: center;
`;

export const MetaInfo = styled.div<Props>`
  order: ${({ size }) => size === 'medium' && 1};
  color: ${({ theme }) => theme.color.lightGray};
  > *:not(:first-child)::before {
    content: '•';
    margin: auto ${pxToRem(5)};
  }
`;

export const UserInfo = styled(Link)<Props>`
  font-weight: 700;
  color: ${({ theme }) => theme.color.primaryColor};
  font-size: ${() => pxToRem(14)};
  flex-basis: ${({ infoLines }) => (infoLines === 2 ? '100%' : '')};
  transition: ease;
`;
