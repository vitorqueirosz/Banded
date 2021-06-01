import { Avatar } from 'components/structure';
import { FiX } from 'react-icons/fi';
import * as S from './ShortUserItem.styles';

type ShortUserItemProps = {
  avatar?: string;
  name: string;
  instrument: string;
  handleRemoveItem: () => void;
}

export const ShortUserItem = ({
  avatar, name, instrument, handleRemoveItem,
}: ShortUserItemProps) => (
  <S.Wrapper>
    <S.CloseWrapper onClick={handleRemoveItem}>
      <FiX size={16} color="#fff" />
    </S.CloseWrapper>
    <Avatar hasBackground size="small" src={avatar} instrument={instrument} />
    <strong>{name}</strong>
    <span>{instrument}</span>
  </S.Wrapper>
);
