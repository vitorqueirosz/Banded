import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const FormContainer = styled.form`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings['2xs']};
    width: 320px;
    height: 100%;
    margin: ${theme.spacings['2xlg']} 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    transition: height 0.2s ease-in-out;
  `}
`;

export const Scroll = css`
 ${({ theme }) => css`
    overscroll-behavior: contain;

    &::-webkit-scrollbar {
      height: 8px;
    }

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px ${theme.colors.dark.light};
      background-color: ${theme.colors.light.darkGray};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.dark.darker};
    }
  `}
`;

type ContainerProps = {
  show?: boolean;
}

const containerModifiers = {
  show: () => css`
    display: flex;
  `,
};

export const WrapperList = styled.div<ContainerProps>`
   ${({ theme, show }) => css`
    display: none;
    padding: ${theme.spacings.sm} 0;
    grid-gap: ${theme.spacings.md} ${theme.spacings.lg};
    flex-wrap: wrap;
    width: 100%;
    height: auto;

    ${media.lessThan('large')`
      width: auto;
      flex-direction: column;
      align-items: center;
    `}

    ${show && containerModifiers.show()}
  `}
`;

export const WrapperToOutlet = styled.div`
  ${({ theme }) => css`
    height: 100%;
    width: 100%;
    padding: ${theme.spacings.md};

    ${media.lessThan('large')`
      padding: ${theme.spacings.xsm};
      overflow-y: auto;
      max-height: calc(100vh - 80px);
      padding-bottom: ${theme.spacings['2xlg']};
    `}
  `}
`;

export const Error = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.error};
    font-size: ${theme.font.sizes.xsm};
    margin-bottom: ${theme.spacings['2xs']};
  `}
`;
