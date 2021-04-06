import { FiArrowRightCircle } from 'react-icons/fi';
import * as S from './Relations.styles';

export type RelationsProps = {
  handleRelations: () => void;
  hasRelations: boolean;
}

export const Relations = ({ hasRelations, handleRelations }: RelationsProps) => (
  <S.Wrapper hasRelations={hasRelations}>
    <S.Switch onClick={handleRelations}>
      <FiArrowRightCircle color="#fff" size={22} />
    </S.Switch>
  </S.Wrapper>
);
