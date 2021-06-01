import { FiPlus, FiX } from 'react-icons/fi';
import * as S from './Add.styles';

export type AddProps = {
  title: string;
  handleAdd?: () => void;
  handleClose?: () => void;
  hasClose?: boolean;
  hasMargin?: boolean;
  align?: 'end' | 'start';
}

export const Add = ({ title, handleAdd, hasMargin, handleClose, align = 'start', hasClose }: AddProps) => (
  <S.Container
    align={align}
    onClick={handleAdd}
    hasClose={hasClose}
    hasMargin={hasMargin}
  >
    <FiPlus size={16} color="#fff" />
    <span>{title}</span>
    {hasClose && <FiX onClick={handleClose} size={16} color="#fff" />}
  </S.Container>
);
