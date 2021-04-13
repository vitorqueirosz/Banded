import { FiX, FiMusic } from 'react-icons/fi';
import * as S from './ShortMusicstyles';

export type ShortMusicProps = {
  name?: string;
  previewImage?: string;
  handleRemoveItem: () => void;
};

export const ShortMusicalItem = ({
  name,
  previewImage,
  handleRemoveItem,
}: ShortMusicProps) => (
  <S.Wrapper>
    {previewImage ? (
      <img src={previewImage} alt={name} />
    ) : (
      <S.FallbackImage>
        <FiMusic size={16} color="#fff" />
      </S.FallbackImage>
    )}
    <S.MusicName>{name}</S.MusicName>
    <S.CloseWrapp onClick={handleRemoveItem}>
      <FiX size={16} color="#fff" />
    </S.CloseWrapp>
  </S.Wrapper>
);
