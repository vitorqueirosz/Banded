import styled, { css } from 'styled-components';
import { Button } from 'components/structure/Button/Button.styles';
import { Wrapper } from 'components/form/TextField/TextField.styles';
import { Divisor } from 'components/contexts/signUp/FileHandler/FileHandler.styles';
import media from 'styled-media-query';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    ${Button} {
      width: 320px;
      margin: 0 auto;
      margin-top: ${theme.spacings['2xlg']};

      ${media.lessThan('medium')`
        width: 100%;
      `}
    }

    ${Wrapper}, ${Divisor} {
      margin-bottom: 0;
    }
  `}
`;
