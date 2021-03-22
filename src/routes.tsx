import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PublicRoutes } from 'components/contexts/routes/PublicRoutes';
import SignIn from 'pages/auth/SignIn';

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/2" element={<PublicRoutes />}>
        <Route path="/" element={<SignIn />} />
      </Route>

      <Route path="/sign-up" element={<PublicRoutes />}>
        <Route path="/" element={<SignIn />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
