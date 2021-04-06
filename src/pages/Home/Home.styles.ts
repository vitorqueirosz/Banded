import { MusicTabs } from 'constants/enums';
import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 100%;
    width: 100%;
    padding: ${theme.spacings.md};
    overflow: hidden;

    ${media.lessThan('large')`
      padding: ${theme.spacings.xsm};
    `}
  `}
`;

export const OptionsContainer = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.sm} 0;
    display: flex;
    align-items: center;
    width: 100%;
  `}
`;

type OptionProps = {
  activeTab?: MusicTabs | false;
}

const optionModifiers = {
  Band: (theme: DefaultTheme) => css`
    background: ${theme.colors.secondary};
    color: ${theme.colors.neutral.light};
    font-weight: 500;
  `,
  Musicians: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.neutral.light};
    font-weight: 500;
  `,
};

export const Option = styled.div<OptionProps>`
  ${({ theme, activeTab = MusicTabs.Band }) => css`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: ${theme.colors.dark.element};
    cursor: pointer;
    color: ${theme.colors.light.gray};
    transition: background 0.3s ease-in-out, width 0.3s ease-in-out;

    ${activeTab && optionModifiers[activeTab](theme)}
  `}
`;

export const MusicalList = styled.div``;
