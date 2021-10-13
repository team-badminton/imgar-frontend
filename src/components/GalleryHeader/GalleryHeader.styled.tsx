import React from 'react';
import styled from 'styled-components';

// utils
import { pxToRem } from '@/util/styleUtils';

export const GalleryHeaderContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  height: ${pxToRem(70)};
  padding: 0 ${pxToRem(15)};
  overflow: hidden;
  gap: ${pxToRem(10)};

  .search {
    display: none;
  }

  @media screen and (min-width: 679px) {
    .search {
      display: block;
    }
  }
`;

export const Title = React.memo(styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${pxToRem(16)};

  .title {
    color: ${({ theme }) => theme.color.white};
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  .author {
    color: ${({ theme }) => theme.color.lightGray};
    font-size: ${({ theme }) => theme.fontSize.xs};
  }

  .bold {
    font-weight: 700;
  }
`);

export const ButtonConTainer = styled.div`
  display: flex;
  gap: ${pxToRem(24)};
  font-weight: 700;
`;
