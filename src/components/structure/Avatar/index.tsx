import { IcDrum, IcSinger, IcGuitar, IcKeyboard, IcAcoustic } from 'assets/icons';
import { memo } from 'react';
import * as S from './Avatar.styles';

export type AvatarProps = {
  src?: string | undefined;
  size?: 'small' | 'medium' | 'large'
  instrument?: string;
  hasBackground?: boolean;
}

type Icon = {
  [key: string]: JSX.Element;
}

const icons = {
  cantor: <IcSinger />,
  guitarra: <IcGuitar />,
  bateria: <IcDrum />,
  teclado: <IcKeyboard />,
  violão: <IcAcoustic />,
} as Icon;

export const Avatar = memo(({ src, size = 'medium', instrument, hasBackground }: AvatarProps) => (
  <S.Wrapper size={size} hasBackground={hasBackground}>
    {src
      ? (
        <S.Wrapper size={size} hasBackground={hasBackground}>
          <S.Image src={src} alt="User Avatar" />
        </S.Wrapper>
      ) : icons[instrument ? instrument.toLowerCase() : 'guitarra'] }
  </S.Wrapper>
));
