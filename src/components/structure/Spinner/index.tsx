import ClipLoader from 'react-spinners/ClipLoader';
import * as S from './Spinner.styles';

export type SpinnerProps = {
  size?: number;
  color?: 'primary' | 'secondary';
}

export const Spinner = ({ size = 30, color = 'primary' }: SpinnerProps) => (
  <S.Wrapper color={color}>
    <ClipLoader size={size} loading />
  </S.Wrapper>
);
