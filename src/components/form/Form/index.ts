import styled, { css } from 'styled-components';

export const FormContainer = styled.div`
  ${({ theme }) => css`
    width: 320px;
    margin: ${theme.spacings['2xlg']} 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  `}
`;
