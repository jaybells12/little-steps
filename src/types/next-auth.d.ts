import { JWT } from 'next-auth/jwt'
import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface User {
    role: number
    school: string
  }
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    role: number
    school: string
  }
}
