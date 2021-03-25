import ClipLoader from 'react-spinners/ClipLoader';
import * as S from './Spinner.styles';

type SpinnerProps = {
  size?: number;
}

export const Spinner = ({ size = 30 }: SpinnerProps) => (
  <S.Wrapper>
    <ClipLoader size={size} loading />
  </S.Wrapper>
);
