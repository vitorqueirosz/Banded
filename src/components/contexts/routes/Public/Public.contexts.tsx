import { SignUpProvider } from 'contexts/SignUp';
import React from 'react';

export const PublicContexts = ({ children }: { children: React.ReactNode }) => (
  <SignUpProvider>{children}</SignUpProvider>
);
