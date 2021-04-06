import styled, { css } from 'styled-components';
import { ModalProps } from 'components/structure';

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

    ${show && wrapperModifiers.show()}
  `}
`;

export const Content = styled.main`
  ${({ theme }) => css`
    width: 640px;
    height: auto;
    background: ${theme.colors.dark.element};
    border-radius: ${theme.border.radius};
    position: relative;
    padding: ${theme.spacings.xsm};

    > svg {
      position: absolute;
      cursor: pointer;
      right: ${theme.spacings.xsm};
      top: ${theme.spacings.xsm};
      transform: translateY(50%);
    }
  `}
`;

export const FilterContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    height: auto;
    grid-template-columns: repeat(2, 1fr);
    margin-top: ${theme.spacings.lg};
  `}
`;

export const Divisor = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 4rem 1fr;
`;

export const SubTitle = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.light.gray};
  `}
`;

export const FormGroupCustom = styled.div`
  ${({ theme }) => css`
    /* display: grid;
    grid-template-columns: 10rem 1fr;
    grid-gap: 0 ${theme.spacings.xsm}; */
  `}
`;
