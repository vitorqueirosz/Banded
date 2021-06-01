import styled, { css } from 'styled-components';
import { ModalProps, Scroll } from 'components/structure';
import media from 'styled-media-query';

const wrapperModifiers = {
  show: () => css`
    opacity: 1;
    visibility: visible;
  `,
};

export const Wrapper = styled.div<Pick<ModalProps, 'show'>>`
  ${({ theme, show }) => css`
    position: relative;
    opacity: 0;
    visibility: hidden;
    background: ${theme.colors.bgModal};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: ${theme.layers.modal};
    transition: opacity 0.3s ease-in-out, visibility 0s 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;

    ${media.lessThan('medium')`
      padding: ${theme.spacings.xsm};
    `}

    ${show && wrapperModifiers.show()}
  `}
`;

export const Content = styled.main<Pick<ModalProps, 'width' | 'height'>>`
  ${({ theme, width, height }) => css`
    width: ${width};
    background: ${theme.colors.dark.element};
    border-radius: ${theme.border.radius};
    position: relative;
    padding: ${theme.spacings.xsm};
    overflow-y: auto;
    height: 100%;
    max-height: 80vh;

    ${!!height &&
    css`
      min-height: ${height};
    `}

    > svg {
      position: absolute;
      cursor: pointer;
      right: ${theme.spacings.xsm};
      top: ${theme.spacings.xsm};
      transform: translateY(50%);
    }

    ${media.lessThan('large')`
      width: 90vw;
      overflow-y: auto;
      max-height: 100%;
      padding: ${theme.spacings['2xlg']} ${theme.spacings.xsm};
    `}

    ${Scroll} {
      &::-webkit-scrollbar {
        width: 4px;
      }
    }
  `}
`;
