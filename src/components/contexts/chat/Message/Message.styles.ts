import styled, { css, DefaultTheme } from 'styled-components';
import { MessageProps } from 'components/contexts/chat/Message';

const wrapperModifiers = {
  isReceived: (theme: DefaultTheme) => css`
    align-self: flex-start;
   ${MessageWrapper} {
    background: ${theme.colors.message.secondary};
   }
  `,
};

export const Wrapper = styled.div<Pick<MessageProps, 'isReceived'>>`
  ${({ theme, isReceived }) => css`
    display: flex;
    flex: 1 0 36px;
    align-self: flex-end;

    ${isReceived && wrapperModifiers.isReceived(theme)}
  `}
`;

export const MessageWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.message.primary};
    max-width: 24rem;
    min-width: 10rem;
    word-break: break-word;
    border-radius: ${theme.border.radius};
    padding: 0.6rem ${theme.spacings['2xs']};
    position: relative;

  `}
`;

export const Message = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.neutral.light};
    word-break: break-word;
    width: 100%;
    height: 2.4rem;
    margin-bottom: 0.4rem;
  `}
`;

export const MessageTime = styled.small`
  ${({ theme }) => css`
    font-size: 1rem;
    color: ${theme.colors.light.lighter};
    align-self: flex-end;
    position: absolute;
    bottom: 0.3rem;
  `}
`;
