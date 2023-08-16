'use client'

import Image from 'next/image'
// import { Button } from '../Button'
import { FormEvent, useState } from 'react'
// import type {
//   GetServerSidePropsContext,
//   InferGetServerSidePropsType,
// } from 'next'
// import { getCsrfToken } from 'next-auth/react'
import { signIn } from 'next-auth/react'

// Need to add labels
export type LoginProps = {}

export const Login = (props: LoginProps) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const loginUser = (e: FormEvent) => {
    e.preventDefault()
    signIn('credentials', { username, password })
  }

  return (
    <form
      onSubmit={loginUser}
      className={'w-4/5 mb-4'}
    >
      <input
        className={
          'w-full bg-transparent border-0 border-b border-lighttext px-0 py-2 placeholder:text-lighttext focus:ring-0 focus:border-lighttext'
        }
        type={'text'}
        name={'username'}
        placeholder={'Username'}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <div className={'relative mb-8'}>
        <input
          className={
            'w-full bg-transparent border-0 border-b border-lighttext px-0 py-2 placeholder:text-lighttext focus:ring-0 focus:border-lighttext'
          }
          type={'password'}
          name={'password'}
          placeholder={'Password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Image
          className={'absolute top-3 right-3'}
          src={'/icons_misc_eye.svg'}
          alt={'eye'}
          width={20}
          height={18}
        />
      </div>
      <button
        className={
          'block bg-accent rounded-full px-6 pt-2.5 pb-3.5 text-primary font-bold tracking-def text-center w-full mb-8'
        }
      >
        Log-In
      </button>
      <label
        className={'text-darkttext tracking-def align-middle'}
        htmlFor={'remember'}
      >
        <input
          className={
            'appearance-none w-5 h-5 rounded-md text-accent bg-transparent  focus:ring-0 focus:ring-offset-0 mr-2'
          }
          type={'checkbox'}
          id={'remember'}
          name={'remember'}
        />
        Remember me
      </label>
    </form>
  )
}
