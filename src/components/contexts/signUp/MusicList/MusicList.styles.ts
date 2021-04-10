import { Scroll } from 'components/structure';
import { appearFromBottom } from 'pages/SignUp/animations';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsm} 0;
    margin-bottom: ${theme.spacings.xsm};
    display: flex;
    flex-direction: column;
    justify-content: center;
    animation: ${appearFromBottom} 0.6s ease-in-out;
    max-width: 320px;
    width: 100%;
    overflow: hidden;
    overflow-x: auto;

    ${Scroll}
  `}
`;

export const MusicWrap = styled.div`
  display: flex;
  align-items: center;
  max-width: 320px;
  width: 100%;
`;

export const Error = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.error};
    margin-top: ${theme.spacings['2xs']};
  `}
`;
