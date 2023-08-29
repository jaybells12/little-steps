import type { NextAuthOptions } from 'next-auth'
import usersData from '../../../../data/users.json'
import CredentialsProvider from 'next-auth/providers/credentials'
// import dbConnect
// import Users model

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        // Find User
        // await dbConnect()

        // If no user found, throw error?
        // const user = await User.findOne({email: credientials.email}, 'role school password')
        const user = usersData.find((user) => user.email.toLowerCase() === credentials?.email.toLowerCase())

        console.log('credentials: ', credentials)
        console.log('user: ', user)

        // If user found, compare passwords
        // const match = bcrypt.compare(credentials.password, user.password)
        // if(match){
        //   Match Successful!
        // return user
        // }else{
        // If passwords do not match, throw error?
        // throw Error('Invalid email or password')
        // }

        // If passwords match:
        // get role from user
        // set role in session?
        // set authed to true?
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
  callbacks: {
    async signIn({ credentials }) {
      console.log('SignIn Callback!')
      // console.log(credentials)
      return true
    },
    async redirect({ url, baseUrl }) {
      console.log('Redirect Callback!')
      // console.log(url, baseUrl)
      return url
    },
    async session({ session, user, token }) {
      console.log('Session Callback!')
      return session
    },
    async jwt({ token, user, account, profile, session, trigger }) {
      console.log('JWT Callback!')
      // console.log(token)
      // console.log(user)
      // console.log(account)
      // console.log(profile)
      // console.log(session)
      // console.log(trigger)
      // console.log('USER: ')
      // console.log(user)
      // token.role = user.role
      if (user) {
        token.role = user.role
        token.school = user.school
      }
      console.log('TOKEN: ')
      console.log(token)
      return token
    },
  },
}
