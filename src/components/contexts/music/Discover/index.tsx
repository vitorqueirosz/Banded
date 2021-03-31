import { IconBaseProps } from 'react-icons/lib';
import * as S from './Discover.styles';

type DiscoverProps = {
  icon: React.ComponentType<IconBaseProps>;
  title: string;
  amount: number | undefined;
}

export const Discover = ({ icon: Icon, title, amount = 0 }: DiscoverProps) => (
  <S.Container>
    <Icon color="#fff" size={18} />
    <S.Title>{title}</S.Title>
    <S.Amount>{amount}</S.Amount>
  </S.Container>
);
