import { pxToRem } from '@/util/styleUtils';
import styled from 'styled-components';

export const SearchResultHeaderContainer = styled.div`
  display: flex;
  position: relative;
  height: ${pxToRem(70)};
  width: 100%;
  min-width: ${pxToRem(450)};
  align-items: center;
  justify-content: space-between;
  z-index: 999;
  left: 50%;
  transform: translateX(-50%);
`;

export const SearchResultHeaderTitle = styled.h3`
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: initial;
`;

export const SearchResultCoverContainer = styled.div`
  min-height: ${pxToRem(350)};
  color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: ${({ theme }) => theme.spaceSize.xl};
`;

export const SearchResultTitle = styled.h2`
  font-size: ${pxToRem(36)};
  margin: 0;
  margin-bottom: ${({ theme }) => theme.spaceSize.l};
  font-weight: initial;
`;

export const SearchOptionContainer = styled.div``;

export const AdvancedSearchContainer = styled.div`
  background-color: ${({ theme }) => theme.color.darkGray};
  border-radius: ${({ theme }) => theme.borderRadius.l};
`;
