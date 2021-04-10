import { Scroll } from 'components/structure';
import styled, { css } from 'styled-components';

// const wrapperModifiers = {

// }

export const Wrapper = styled.div<{ inputSize?: boolean }>`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    margin-bottom: ${theme.spacings['2xs']};

    .selectField {
      &__control {
        min-height: 5.6rem;
        background: ${theme.colors.dark.light};
        cursor: pointer;
        border: none;

        &:hover {
          background: ${theme.colors.dark.darker};
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

      &__value-container {
        > div {
          color: ${theme.colors.light.lighter};
        }
      }

      &__menu {
        background: ${theme.colors.dark.light};

        &-list {
          max-height: 180px;

          &:hover{
            background: none;
          }

          ${Scroll} {
            &::-webkit-scrollbar {
              width: 4px;
            }
          }
        }
      }

      &__option {
        color: ${theme.colors.light.lighter};
        display: flex;
        align-items: center;
        font-size: ${theme.font.sizes.sm};
        line-height: 20px;

        &:hover {
          background: ${theme.colors.dark.darker};
        }

        &--is-focused {
          background-color: none;
        }
        &--is-selected {
          background-color: #none;
        }
      }
    }
  `}
`;

const labelModifiers = {
  show: () => css`
    opacity: 1;
    visibility: visible;
    top: -8%;
  `,
};

export const Label = styled.label<{ show: boolean }>`
  ${({ theme, show = false }) => css`
    color: #999;
    line-height: ${theme.font.lineHeight.md};
    font-size: ${theme.font.sizes.xsm};
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
