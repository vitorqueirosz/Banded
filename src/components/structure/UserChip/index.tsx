import { Avatar } from '../Avatar';
import * as S from './UserChip.styles';

export type UserChipProps = {
  name: string;
  avatar?: string;
  lastMessage?: string;
  onClick: () => void;
  size?: 'small' | 'medium' | 'large';
  hasBorder?: boolean;
}

export const UserChip = ({
  name,
  avatar,
  lastMessage,
  onClick,
  size,
  hasBorder = false,
}: UserChipProps) => (
  <S.Container size={size} onClick={onClick} hasBorder={hasBorder}>
    <Avatar size={size} src={avatar} hasBackground />
    <S.Divisor>
      <span>{name}</span>
      <p>{lastMessage}</p>
    </S.Divisor>
  </S.Container>
);
