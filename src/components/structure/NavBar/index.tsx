import { User } from 'contexts';
import { Avatar, Dropdown } from 'components/structure';
import { FiMenu } from 'react-icons/fi';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useChangeFocus } from 'hooks/useChangeFocus';
import * as S from './Navbar.styles';
import { MediaMatch } from '../MediaMatch';

export type NavBarProps = {
  user?: User;
  handleOverlay: () => void;
  hasRelations: boolean;
}

export const optionsNav = [
  {
    name: 'Home',
    link: '/home',
  },
  {
    name: 'Pesquisar bandas',
    link: '/search',
  },
];

const optionsDropdown = [
  {
    name: 'Perfil',
    link: '/profile',
  },
  {
    name: 'Sair',
  },
];

export const NavBar = ({ user, handleOverlay, hasRelations }: NavBarProps) => {
  const [selectedOption, setSelectedOption] = useState('Home');
  const [showDropdown, setShowDropdown] = useState(false);
  const currentRef = useChangeFocus(() => setShowDropdown(false));

  const handleShowDropdown = () => setShowDropdown(prevState => !prevState);

  const handleSelectOption = (option: string) =>
    setSelectedOption(option);

  return (
    <S.Container hasRelations={hasRelations}>
      <MediaMatch lessThan="large">
        <FiMenu color="#fff" size={22} onClick={handleOverlay} />
      </MediaMatch>

      <MediaMatch greaterThan="large">
        {optionsNav.map(({ name, link }) => (
          <Link
            onClick={() => handleSelectOption(name)}
            to={link}
            key={name}
          >
            <S.Title active={selectedOption === name}>{name}</S.Title>
          </Link>
        ))}

      </MediaMatch>
      <S.UserContainer onClick={handleShowDropdown}>
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

      <Dropdown ref={currentRef} show={showDropdown} options={optionsDropdown} />
    </S.Container>
  );
};
