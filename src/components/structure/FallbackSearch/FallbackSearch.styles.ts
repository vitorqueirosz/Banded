import styled, { css } from 'styled-components';
import { Paragraph } from 'components/structure/Typography/Typography.styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${Paragraph} {
      font-size: ${theme.font.sizes.lg};
      margin-top: ${theme.spacings.sm};
    }
  `}
`;

export const Content = styled.div`
  text-align: center;
  height: 60%;
`;
