import * as S from './itemList.styles';

type ItemListProps = {
  children: React.ReactNode;
  error: string;
}

export const ItemList = ({ children, error }: ItemListProps) => (
  <S.Wrapper>
    <S.MusicWrap>
      {children}
    </S.MusicWrap>
    <S.Error show={!!error}>{error}</S.Error>
  </S.Wrapper>
);
