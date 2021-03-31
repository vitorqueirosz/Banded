import { IcDrum, IcSinger, IcGuitar, IcKeyboard, IcAcoustic } from 'assets/icons';
import * as S from './Avatar.styles';

export type AvatarProps = {
  src: string
  size?: 'small' | 'medium' | 'large'
  instrument?: string;
}

type Icon = {
  [key: string]: JSX.Element;
}

export const Avatar = ({ src, size = 'medium', instrument = '' }: AvatarProps) => {
  const icons = {
    Cantor: <IcSinger />,
    Guitarra: <IcGuitar />,
    Bateria: <IcDrum />,
    tecladista: <IcKeyboard />,
    Violão: <IcAcoustic />,
  } as Icon;

  return (
    <S.Wrapper size={size} instrument={!!instrument}>
      {src ? <S.Image src={src} alt="User Avatar" /> : icons[instrument! || 'Guitarra']}
    </S.Wrapper>
  );
};
