import * as S from './Avatar.styles';

export type AvatarProps = {
  src: string
  size?: 'small' | 'medium' | 'large'
}

export const Avatar = ({ src, size = 'medium' }: AvatarProps) => (
  <S.Image size={size} src={src || ''} alt="User Avatar" />
);
