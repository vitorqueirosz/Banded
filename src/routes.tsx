import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PublicRoutes } from 'components/contexts/routes/Public';
import SignIn from 'pages/auth/SignIn';
import { FirstStep, SecondStep, ThirdStep } from 'pages/auth/SignUp';
import routes from 'constants/routes';

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path={routes.signIn.base} element={<PublicRoutes />}>
        <Route path={routes.signIn.base} element={<SignIn />} />
      </Route>

      <Route path={routes.signUp.firstStep} element={<PublicRoutes />}>
        <Route path={routes.signUp.base} element={<FirstStep />} />
        <Route path={routes.signUp.secondStep} element={<SecondStep />} />
        <Route path={routes.signUp.thirdStep} element={<ThirdStep />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
