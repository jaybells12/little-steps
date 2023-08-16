'use client'

import { createContext } from 'react'

export const AuthContext = createContext(false)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // value = ?
  return <AuthContext.Provider value={true}>{children}</AuthContext.Provider>
}
