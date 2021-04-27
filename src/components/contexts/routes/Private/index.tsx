import { NavBar, Overlay } from 'components/structure';
import { Relations } from 'components/contexts';
import { USERS } from 'constants/endpoints';
import { User } from 'interfaces';
import { useSettings } from 'contexts/Settings';
import { useFetch } from 'hooks/useFetch';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

// import { useCache } from 'hooks/useCache';
import { useChangeFocus } from 'hooks/useChangeFocus';
import * as S from './Private.styles';
import { PrivateContexts } from './Private.contexts';

export type UserFetchProps = {
  user: User;
}

export const PrivateRoutes = () => {
  const { data } = useFetch<UserFetchProps>(USERS.BASE);
  const { hasRelations, setHasRelations } = useSettings();
  const [showOverlay, setShowOverlay] = useState(false);
  const overlayRef = useChangeFocus(() => setShowOverlay(false));

  return (
    <PrivateContexts>
      <S.Wrapper hasRelations={hasRelations}>
        <NavBar
          hasRelations={hasRelations}
          user={data?.user}
          handleOverlay={() => setShowOverlay(prevState => !prevState)}
        />

        <Overlay
          ref={overlayRef}
          show={showOverlay}
          user={data?.user}
          handleCloseOverlay={() => setShowOverlay(prevState => !prevState)}
        />

        <S.OutletWrapper hasRelations={hasRelations}>
          <Outlet />
        </S.OutletWrapper>

        <Relations
          hasRelations={hasRelations}
          handleRelations={() => setHasRelations(prevState => !prevState)}
        />
      </S.Wrapper>
    </PrivateContexts>
  );
};
