import styled from 'styled-components';
import { pxToRem } from '@/util/styleUtils';
import { SuggestThumbnailProps } from './SuggestList.type';

export const SuggestThumbnail = styled.div<SuggestThumbnailProps>`
  background: url(${props => props.src}) no-repeat center center / cover;
  width: ${pxToRem(36)};
  height: ${pxToRem(36)};
  border-radius: ${pxToRem(3)};
  margin-right: ${({ theme }) => theme.spaceSize.s};
  flex-shrink: 0;
  ${({ isCircle }) => isCircle && `border-radius: 50%;`}
`;

export const SuggestContainer = styled.div`
  position: absolute;
  top: ${pxToRem(36 + 8)};
  width: 100%;
  border-radius: ${pxToRem(3)};
  border: ${pxToRem(1)} solid rgba(255, 255, 255, 0.1);
  background-color: ${({ theme }) => theme.color.darkGray};
  padding: ${({ theme }) => theme.spaceSize.s};
  padding-bottom: ${({ theme }) => theme.spaceSize.l};
  color: ${({ theme }) => theme.color.lightGray};
  h3 {
    padding-left: ${({ theme }) => theme.spaceSize.m};
    font-size: ${({ theme }) => theme.fontSize.xs};
    text-transform: uppercase;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    &:not(:last-child) {
      margin-bottom: ${({ theme }) => theme.spaceSize.xl};
    }
    li {
      margin: 0;
      a {
        display: flex;
        align-items: center;
        min-height: ${pxToRem(40)};
        padding: ${({ theme }) => theme.spaceSize.xs};
        padding-left: ${({ theme }) => theme.spaceSize.m};
        color: ${({ theme }) => theme.color.lightGray};
        &:hover {
          background-color: rgba(255, 255, 255, 0.3);
        }
      }
      strong {
        color: ${({ theme }) => theme.color.white};
      }
      span {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
`;
