import styled, { css, DefaultTheme } from 'styled-components';
import { RelationsProps } from 'components/contexts';
import media from 'styled-media-query';

type WrapperProps = Pick<RelationsProps, 'hasRelations'>;

const wrapperModifiers = {
  hide: (theme: DefaultTheme) => css`
    transform: translateX(${theme.elements.relations});

    ${Switch} {
      svg {
        transform: rotate(180deg);
      }
    }
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, hasRelations }) => css`
    position: fixed;
    right: 0;
    height: 100%;
    width: ${theme.elements.relations};
    background: ${theme.colors.dark.element};
    transition: transform 0.3s ease-in-out;

    ${media.lessThan('large')`
      bottom: 0;
      transform: translateY(90%);
      width: 100%;
    `}

    ${!hasRelations && wrapperModifiers.hide(theme)}
  `}
`;

export const Switch = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.dark.darker};
    width: 30px;
    height: 30px;
    position: absolute;
    left: -30px;
    top: 10rem;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    border-radius: ${theme.border.radius} 0 0 ${theme.border.radius};
    padding: calc(${theme.spacings['2xs']} / 2);
  `}
`;
