import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { PublicRoutes, PrivateRoutes } from 'components/contexts/routes';
import { SignIn, FirstStep, SecondStep, ThirdStep } from 'pages/auth';
import { Home } from 'pages/Home';
import routes from 'constants/routes';
import { isUserAuthenticated } from 'utils/session';

type PrivateRouteProps = {
  children?: React.ReactNode;
  element?: React.ReactElement | null;
  path?: string;
}

const PrivateRoute = ({ path, element, children }: PrivateRouteProps) => {
  if (isUserAuthenticated()) {
    return <Route path={path} element={element}>{children}</Route>;
  }

  return <Navigate to={routes.auth.initial} />;
};

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <PrivateRoute path={routes.app.base} element={<PrivateRoutes />}>
        <PrivateRoute path={routes.app.home} element={<Home />} />
      </PrivateRoute>

      <Route path={routes.auth.initial} element={<PublicRoutes />}>
        <Route path={routes.auth.base} element={<SignIn />} />
      </Route>

      <Route path={routes.signUp.firstStep} element={<PublicRoutes />}>
        <Route path={routes.signUp.base} element={<FirstStep />} />
        <Route path={routes.signUp.secondStep} element={<SecondStep />} />
        <Route path={routes.signUp.thirdStep} element={<ThirdStep />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
