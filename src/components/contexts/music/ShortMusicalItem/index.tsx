import { FiX, FiMusic } from 'react-icons/fi';
import * as S from './ShortMusicstyles';

export type ShortMusicProps = {
  album_name?: string;
  previewImage?: string;
  music_name?: string;
  handleRemoveItem: () => void;
};

export const ShortMusicalItem = ({
  album_name,
  previewImage,
  handleRemoveItem,
}: ShortMusicProps) => (
  <S.Wrapper>
    {previewImage ? (
      <img src={previewImage} alt={album_name} />
    ) : (
      <S.FallbackImage>
        <FiMusic size={16} color="#fff" />
      </S.FallbackImage>
    )}
    <S.MusicName>{album_name}</S.MusicName>
    <S.CloseWrapp onClick={handleRemoveItem}>
      <FiX size={16} color="#fff" />
    </S.CloseWrapp>
  </S.Wrapper>
);
