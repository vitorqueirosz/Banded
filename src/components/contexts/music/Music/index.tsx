import React from 'react';

import { FiX } from 'react-icons/fi';
import * as S from './Music.styles';

export type MusicProps = {
  music_name: string;
  artist_name: string;
  duration?: string;
  album_name: string;
  album_image: string;
  size: 'normal' | 'large';
  hasClosing?: boolean;
  type: 'normal' | 'band' | 'user';
};

export const Music = ({
  music_name,
  artist_name,
  duration,
  album_image,
  size = 'normal',
  hasClosing,
  type = 'normal',
}: MusicProps) => (
  <S.Wrapper size={size} type={type}>
    <img src={album_image} alt={music_name} />

    <S.MusicContent>
      <S.MusicName>{music_name}</S.MusicName>
      <S.ArtistName>{artist_name}</S.ArtistName>
    </S.MusicContent>

    {hasClosing && (
      <S.CloseWrapp>
        <FiX size={16} color="#fff" />
      </S.CloseWrapp>
    )}
    {!!duration && <S.Duration>{duration}</S.Duration>}
  </S.Wrapper>
);
