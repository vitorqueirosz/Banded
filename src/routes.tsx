import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PublicRoutes, PrivateRoutes } from 'components/contexts/routes';
import { FirstStep, SecondStep, ThirdStep } from 'pages/SignUp';
import { SignIn } from 'pages/auth';
import { Home } from 'pages/Home';
import { ROUTES } from 'constants/routes';
import { isUserAuthenticated } from 'utils/session';
import { Search } from 'pages/Search';
import { Profile } from 'pages/Profile';

type PrivateRouteProps = {
  children?: React.ReactNode;
  element?: React.ReactElement | null;
  path?: string;
}

const PrivateRoute = ({ path, element, children }: PrivateRouteProps) => {
  if (isUserAuthenticated()) {
    return <Route path={path} element={element}>{children}</Route>;
  }

  return <Navigate to={ROUTES.auth.initial} />;
};

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <PrivateRoute path={ROUTES.app.base} element={<PrivateRoutes />}>
        <PrivateRoute path={ROUTES.app.base} element={<Navigate to={ROUTES.app.home} />} />
        <PrivateRoute path={ROUTES.app.home} element={<Home />} />
        <Route path={ROUTES.search} element={<Search />} />
        <Route path={ROUTES.profile} element={<Profile />} />
      </PrivateRoute>

      <Route path={ROUTES.auth.initial} element={<PublicRoutes />}>
        <Route path={ROUTES.auth.base} element={<SignIn />} />
      </Route>

      <Route path={ROUTES.signUp.firstStep} element={<PublicRoutes />}>
        <Route path={ROUTES.signUp.base} element={<FirstStep />} />
        <Route path={ROUTES.signUp.secondStep} element={<SecondStep />} />
        <Route path={ROUTES.signUp.thirdStep} element={<ThirdStep />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
