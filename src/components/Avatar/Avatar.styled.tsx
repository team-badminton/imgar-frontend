import styled from 'styled-components';
import { pxToRem } from '@/util/styleUtils';
import { Link } from 'react-router-dom';
import { Button } from '@/components';
import { AvatarProps } from './Avatar.type';

export interface StyledAvatarProps {
  size: AvatarProps['size'];
  transScaleImage: AvatarProps['transScaleImage'];
}

export const StyledAvatar = styled.div<StyledAvatarProps>`
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.xs};
  align-items: center;
  img {
    margin-top: ${pxToRem(1)};
    margin-right: ${({ size, theme }) => (size === 'medium' ? theme.spaceSize.m : theme.spaceSize.s)};
    transition: all 0.3s;
    cursor: pointer;
    ${({ transScaleImage }) =>
      transScaleImage &&
      `
        &:hover {
          transform: scale(${transScaleImage});
      }
    `}
  }
`;

export const GiveEmeraldButton = styled(Button)`
  padding: 0 ${pxToRem(9)};
  margin-left: ${({ theme }) => theme.spaceSize.s};
`;

export const Info = styled.div`
  display: flex;
  width: ${pxToRem(500)};
  flex-wrap: wrap;
  align-items: center;
`;

interface infoRowsProps {
  $infoRows: AvatarProps['infoRows'];
}

export const MetaInfo = styled.div<infoRowsProps>`
  order: ${({ $infoRows }) => $infoRows === 2 && 1};
  color: ${({ theme }) => theme.color.lightGray};
  margin-top: ${({ $infoRows, theme }) => $infoRows === 2 && theme.spaceSize.xs};
  flex-basis: ${({ $infoRows }) => $infoRows === 2 && '100%'};
  > *:not(:first-child)::before {
    content: '•';
    margin: auto ${pxToRem(5)};
  }
`;

export const Platform = styled.span`
  font-weight: 700;
  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.color.white};
  }
`;

export const UserInfo = styled(Link)<infoRowsProps>`
  cursor: pointer;
  font-weight: 700;
  color: ${({ theme }) => theme.color.primaryColor};
  font-size: ${({ $infoRows, theme }) => ($infoRows === 2 ? theme.fontSize.s : theme.fontSize.xs)};
  &:hover {
    text-decoration: ${({ $infoRows }) => $infoRows === 1 && 'underline'};
  }
`;
