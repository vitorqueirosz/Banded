import { FiMessageCircle, FiSearch } from 'react-icons/fi';
import { useTheme } from 'styled-components';
import { Paragraph } from 'components/structure';
import * as S from './FallbackSearch.styles';

export type Options = 'search' | 'chat';

type FallbackSearchProps = {
  type?: Options;
}

export const FallbackSearch = ({ type = 'chat' }: FallbackSearchProps) => {
  const { colors } = useTheme();

  return (
    <S.Wrapper>
      {
        type === 'chat' ? (
          <S.Content>
            <FiMessageCircle color={colors.light.gray} size={64} />
            <Paragraph>Inicie uma conversa agora mesmo!</Paragraph>
          </S.Content>
        ) : (
          <S.Content>
            <FiSearch color={colors.light.gray} size={64} />
            <Paragraph>Usuario nao encontrado, tente novamente</Paragraph>
          </S.Content>
        )
      }
    </S.Wrapper>
  );
};
