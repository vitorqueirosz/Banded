import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PublicRoutes } from 'components/contexts/routes/PublicRoutes';
import SignIn from 'pages/auth/SignIn';
import { FirstStep } from 'pages/auth/SignUp';

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PublicRoutes />}>
        <Route path="/" element={<SignIn />} />
      </Route>

      <Route path="/sign-up" element={<PublicRoutes />}>
        <Route path="/" element={<FirstStep />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
