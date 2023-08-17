import Nav from '@/components/Nav'
import { AuthProvider } from '../AuthProvider'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata = {
  title: 'Little Steps',
  description: 'Montessouri Lesson Planning and Student Tracking',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} font-sans`}>
        <AuthProvider>
          <Nav />
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
