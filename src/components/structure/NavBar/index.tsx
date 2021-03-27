import { User } from 'contexts';
import { Avatar } from 'components/structure';

import * as S from './Navbar.styles';

type NavBarProps = {
  user?: User;
}

const NavBar = ({ user }: NavBarProps) => (
  <S.Container>
    <S.Title>Pesquisar bandas</S.Title>
    <S.UserContainer>
      <Avatar size="small" src={user?.avatar || 'https://avatars.githubusercontent.com/u/59986415?v=4'} />
      <S.UserName>{user?.name}</S.UserName>
    </S.UserContainer>
  </S.Container>
);

export default NavBar;
