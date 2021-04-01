import { User } from 'contexts';
import { Avatar } from 'components/structure';

import { FiMenu } from 'react-icons/fi';
import * as S from './Navbar.styles';
import { MediaMatch } from '../MediaMatch';

type NavBarProps = {
  user?: User;
  handleOverlay: () => void;
}

export const NavBar = ({ user, handleOverlay }: NavBarProps) => (
  <S.Container>
    <MediaMatch lessThan="large">
      <FiMenu color="#fff" size={22} onClick={handleOverlay} />
    </MediaMatch>

    <MediaMatch greaterThan="large">
      <S.Title>Pesquisar bandas</S.Title>
    </MediaMatch>
    <S.UserContainer>
      <Avatar
        size="small"
        instrument={user?.userMusician?.instrument}
        src={user?.avatar}
        hasBackground={!user?.avatar}
      />
      <MediaMatch greaterThan="large">
        <S.UserName>{user?.name}</S.UserName>
      </MediaMatch>
    </S.UserContainer>
  </S.Container>
);
