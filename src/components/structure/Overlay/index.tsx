import { User } from 'interfaces';
import { FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import theme from 'styles/theme';
import { forwardRef, useMemo } from 'react';
import { useSignOut } from 'useCases';
import { Avatar } from '../Avatar';
import * as S from './Overlay.styles';

export type OverlayProps = {
  show: boolean;
  user?: User;
  handleCloseOverlay: () => void;
}

export const Overlay = forwardRef<HTMLDivElement, OverlayProps>(({
  show,
  user,
  handleCloseOverlay,
}, ref) => {
  const handleSignOut = useSignOut();

  const optionsOverlay = useMemo(() => [
    {
      name: 'Home',
      link: '/home',
    },
    {
      name: 'Meu perfil',
      link: '/profile',
    },
    {
      name: 'Pesquisar bandas',
      link: '/search',
    },
    {
      name: 'Sair',
      isOut: true,
      action: handleSignOut,
    },
  ], [handleSignOut]);

  return (
    <S.Wrapper show={show} ref={ref}>
      <S.Header>
        <S.ProfileContent>
          <Avatar src={user?.avatar} size="small" hasBackground={!user?.avatar} />
          <span>{user?.name}</span>
        </S.ProfileContent>

        <FiX color={theme.colors.primary} size={22} onClick={handleCloseOverlay} />
      </S.Header>

      <S.Content>
        {optionsOverlay.map(({ name, isOut, link, action }) => (
          <S.Option
            onClick={isOut && action ? (
              () => {
                handleCloseOverlay();
                action();
              }
            )
              : handleCloseOverlay}
            key={name}
            as={isOut ? 'button' : Link}
            to={link!}
          >
            {name}
          </S.Option>
        ))}
      </S.Content>
    </S.Wrapper>
  );
});
