import { Scroll } from 'components/structure';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;

  ${({ theme }) => css`
    .selectField {
      &__control {
        background: ${theme.colors.light.lighter};
        margin-bottom: ${theme.spacings.xsm};
        cursor: pointer;

        &--is-focused {
          border-color: ${theme.colors.primary};
        }

        &--menu-is-open {
          border-color: ${theme.colors.primary};
        }
      }

      &__loading-indicator {
        color: ${theme.colors.primary};
      }

      &__indicator-separator {
        display: none;
      }

      &__menu {
        background: ${theme.colors.light.lighter};
        &-list {
          max-height: 180px;

          ${Scroll} {
            &::-webkit-scrollbar {
              width: 4px;
            }
          }
        }

      }
    }
  `}
`;

const labelModifiers = {
  show: () => css`
    opacity: 1;
    visibility: visible;
    top: -24%;
  `,
};

export const Label = styled.label<{ show: boolean }>`
  ${({ theme, show = false }) => css`
    color: #999;
    line-height: ${theme.font.lineHeight.md};
    font-size: 10px;
    font-weight: 500;
    position: absolute;
    margin-left: ${theme.spacings['2xs']};
    transition: all 0.2s ease-in-out;
    opacity: 0;
    top: 50%;
    visibility: hidden;

    ${show && labelModifiers.show()}
  `}
`;
