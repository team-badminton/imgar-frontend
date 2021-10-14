import styled from 'styled-components';

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
`;

export const StyledWelcomeMessage = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme }) => theme.color.aquaBlue};
  letter-spacing: 0.6px;
`;
