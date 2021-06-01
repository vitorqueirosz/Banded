import { Scroll } from 'components/structure';
import { appearFromBottom } from 'pages/SignUp/animations';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${appearFromBottom} 0.6s ease-in-out;
  max-width: 320px;
  width: 100%;
  overflow: hidden;
  overflow-x: auto;
  min-height: 14rem;

  ${Scroll}
`;

export const MusicWrap = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-bottom: ${theme.spacings['2xs']};
    max-width: 320px;
    width: 100%;
    gap: 0 ${theme.spacings.xsm};
  `}
`;

const errorModifiers = {
  show: () => css`
    opacity: 1;
  `,
};

export const Error = styled.span<{ show?: boolean }>`
  ${({ theme, show }) => css`
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    color: ${theme.colors.error};

    ${show && errorModifiers.show()}
  `}
`;
