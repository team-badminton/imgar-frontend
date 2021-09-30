import { pxToRem } from '@/util/styleUtils';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Picture } from '..';
import { PictureProps } from '../Picture/Picture.type';

export const UserInfoContainer = styled.div`
  height: 250px;
  display: flex;
  align-items: center;
`;

export const UserInfoAvatar = ({ src }: Partial<PictureProps>): ReactElement => (
  <Picture imageWidth={128} isCircle src={src} />
);

export const UserInfoDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: ${({ theme }) => theme.spaceSize.l};
  color: ${({ theme }) => theme.color.white};
`;

export const UserInfoUsername = styled.div`
  font-size: ${pxToRem(44)};
  font-weight: bold;
`;

export const UserInfoExtra = styled.div`
  font-size: ${({ theme }) => theme.fontSize.m};
  span {
    :not(:last-child)::after {
      display: inline-block;
      content: '·';
      margin: 0 ${({ theme }) => theme.spaceSize.s};
    }
  }
`;
