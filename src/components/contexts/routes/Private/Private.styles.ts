import styled, { css, DefaultTheme } from 'styled-components';

type WrapperProps = {
  hasRelations: boolean;
}

const wrapperModifiers = {
  hasRelations: (theme: DefaultTheme) => css`
    width: calc(100% - ${theme.elements.relations});
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, hasRelations = true }) => css`
    display: grid;
    height: 100vh;
    grid-template-areas: 'nav' 'main';
    grid-template-rows: 80px 1fr;
    grid-template-columns: 1fr;
    width: 100%;
    transition: width 0.3s ease-in-out;

    ${!hasRelations && wrapperModifiers.hasRelations(theme)}
  `}
`;

export const OutletWrapper = styled.div`
  ${({ theme }) => css`
    grid-area: main;
    padding-bottom: ${theme.spacings['2xlg']};
  `}
`;
