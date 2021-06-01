import styled, { css } from 'styled-components';
import { Button } from 'components/structure/Button/Button.styles';
import { Wrapper } from 'components/form/TextField/TextField.styles';
import { Wrapper as MultiWrapper } from 'components/form/MultiSelectField/MultiSelect.styles';
import { Divisor } from 'components/contexts/signUp/FileHandler/FileHandler.styles';
import { Form } from 'components/structure/Layouts/layout';
import * as AddStyles from 'components/structure/Add/Add.styles';
import media from 'styled-media-query';

const containerModifiers = {
  hasAlbum: () => css`
    ${Button} {
      position: static;
    }
  `,
};

export const Container = styled.div<{ hasAlbum: boolean }>`
  ${({ theme, hasAlbum }) => css`
    display: flex;
    flex-direction: column;

    ${Button} {
      width: 32rem;
      display: flex;
      margin: 0 auto;
      position: absolute;
      bottom: 4%;
      left: 30%;

      ${media.lessThan('medium')`
          width: 80vw;
          left: 5%;
          right: 5%;
      `}
    }

    ${Form} {
      ${media.lessThan('medium')`
        padding: ${theme.spacings.xsm} 0;
        padding-bottom: ${theme.spacings.lg};
      `}
    }

    ${Wrapper}, ${Divisor}, ${MultiWrapper} {
      margin-bottom: 0;
    }

    ${hasAlbum && containerModifiers.hasAlbum()}
  `}
`;

const contentModifiers = {
  show: () => css`
    display: block;
    opacity: 1;
    visibility: visible;
    position: relative;
  `,
};

export const HideContent = styled.div<{ show: boolean }>`
  ${({ theme, show }) => css`
    position: absolute;
    opacity: 0;
    visibility: hidden;
    margin-bottom: ${theme.spacings.md};
    background: #070a0d;
    padding: ${theme.spacings.xsm};
    border-radius: ${theme.border.radius};
    top: -100%;

    > svg {
      position: absolute;
      cursor: pointer;
      right: calc(-${theme.spacings['2xs']} / 2);
      top: -${theme.spacings['2xs']};
    }

    ${AddStyles.Container} {
      position: absolute;
      right: ${theme.spacings.xsm};
      top: ${theme.spacings['2xs']};
      margin-top: 0;
      transform: translateY(50%);
    }

    ${show && contentModifiers.show()}
  `}
`;

export const MusicHeader = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: ${theme.spacings.md};

    ${AddStyles.Container} {
      position: static;
      margin-top: 0;
      transform: translateY(0);
    }
  `}
`;
