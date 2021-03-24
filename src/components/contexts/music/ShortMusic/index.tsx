import { FiX } from 'react-icons/fi';
import * as S from './ShortMusicstyles';

export type ShortMusicProps = {
  music_name: string;
  album_image: string;
  handleRemoveMusic: () => void;
};

export const ShortMusic = ({
  music_name,
  album_image,
  handleRemoveMusic,
}: ShortMusicProps) => (
  <S.Wrapper>
    <img src={album_image} alt={music_name} />
    <S.MusicName>{music_name}</S.MusicName>
    <S.CloseWrapp onClick={handleRemoveMusic}>
      <FiX size={16} color="#fff" />
    </S.CloseWrapp>
  </S.Wrapper>
);
