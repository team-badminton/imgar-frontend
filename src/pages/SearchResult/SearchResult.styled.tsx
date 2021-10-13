import { pxToRem } from '@/util/styleUtils';
import styled from 'styled-components';
import { AdvancedSearchContainerProps } from './SearchResult.type';

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
  min-height: ${pxToRem(280)};
  height: auto;
  color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${pxToRem(50)};
`;

export const SearchResultTitle = styled.h2`
  font-size: ${pxToRem(36)};
  margin: 0;
  margin-bottom: ${({ theme }) => theme.spaceSize.l};
  font-weight: initial;
`;

export const SearchOptionContainer = styled.div`
  width: 100%;
  text-align: center;
`;

export const AdvancedSearchContainer = styled.form<AdvancedSearchContainerProps>`
  position: relative;
  width: 100%;
  padding: ${({ theme }) => theme.spaceSize.l};
  gap: ${({ theme }) => theme.spaceSize.m};
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: ${({ columns }) => `repeat(${columns === 1 ? 6 : 3}, 1fr)`};
  background-color: ${({ theme }) => theme.color.darkGray};
  border-radius: ${({ theme }) => theme.borderRadius.l};
  margin-top: ${({ theme }) => theme.spaceSize.l};
  margin-bottom: ${pxToRem(150)};
  input::placeholder {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;
