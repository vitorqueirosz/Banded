import { FiPlus } from 'react-icons/fi';
import * as S from './Add.styles';

type AddProps = {
  title: string;
  handleAdd: () => void;
}

export const Add = ({ title, handleAdd }: AddProps) => (
  <S.Container onClick={handleAdd}>
    <FiPlus size={16} color="#fff" />
    <span>{title}</span>
  </S.Container>
);
