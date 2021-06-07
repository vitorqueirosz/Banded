import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;

    .reactEasyCrop {
      &_Container {
        max-height: 50%;
        margin: auto;
      }

      &_CropArea {
        border-radius: 50%;
        max-width: 300px;
        max-height: 300px;
      }
    }

    .rc-slider {
      width: 50%;
      position: absolute;
      bottom: 5%;

      &-track {
        background: ${theme.colors.primary};
      }
    }
  `}
`;

export const InputFile = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    padding: ${theme.spacings['2xs']};
    border-radius: 50%;
    cursor: pointer;

    > input {
      display: none;
    }
  `}
`;

export const Content = styled.div`
  margin: auto;
  height: 200px;
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 10rem;
    height: 10rem;
  }
`;

export const Divisor = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 16%;

    > button {
      background: ${theme.colors.primary};
      border-radius: 50%;
      width: 40px;
      height: 40px;
      padding: ${theme.spacings['2xs']};
      border: none;
      margin-left: ${theme.spacings.xsm};
      cursor: pointer;

      &:disabled {
        background: ${theme.colors.light.gray};
        cursor: auto;
      }
    }
  `}
`;
