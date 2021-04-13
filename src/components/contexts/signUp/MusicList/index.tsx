/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-array-index-key */
import { ShortMusicalItem } from 'components/contexts/music';
import * as S from './MusicList.styles';

type MusicListProps = {
  items: any[];
  error: string;
  handleRemoveItem: (item: any) => void;
}

export const MusicList = ({ items, error, handleRemoveItem }: MusicListProps) => (
  <S.Wrapper>
    <S.MusicWrap>
      {items.map(({ album_name, music_name, previewImage }: any, index) => (
        <ShortMusicalItem
          name={album_name ?? music_name}
          previewImage={previewImage}
          key={`musicalItem-${index}`}
          handleRemoveItem={() => handleRemoveItem(items[index])}
        />
      ))}
    </S.MusicWrap>
    {!!error && <S.Error>{error}</S.Error>}
  </S.Wrapper>
);
