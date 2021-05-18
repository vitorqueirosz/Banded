import { FiPlus, FiX } from 'react-icons/fi';
import * as S from './Add.styles';

export type AddProps = {
  title: string;
  handleAdd?: () => void;
  handleClose?: () => void;
  onEnd?: boolean;
  hasClose?: boolean;
}

export const Add = ({ title, handleAdd, handleClose, onEnd, hasClose }: AddProps) => (
  <S.Container
    onEnd={onEnd}
    onClick={handleAdd}
    hasClose={hasClose}
  >
    <FiPlus size={16} color="#fff" />
    <span>{title}</span>
    {hasClose && <FiX onClick={handleClose} size={16} color="#fff" />}
  </S.Container>
);
