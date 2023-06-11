'use client';

import { createContext } from 'react';

export const AuthContext = createContext(false);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return <AuthContext.Provider value={true}>{children}</AuthContext.Provider>;
};
