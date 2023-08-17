import type { NextAuthOptions } from 'next-auth'
import usersData from '../../../../data/users.json'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        // Find User

        // If no user found, throw error?

        // If user found, compare passwords

        // If passwords do not match, throw error?

        // If passwords match:
        // get role from user
        // set role in session?
        // set authed to true?

        const user = usersData.find(
          (user) =>
            user.username.toLowerCase() === credentials?.username.toLowerCase()
        )
        console.log('user: ', user)
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
}
