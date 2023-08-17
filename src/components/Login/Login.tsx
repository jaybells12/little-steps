'use client'

import Image from 'next/image'
import Button from '@/components/Button'
import { useState } from 'react'

export type LoginProps = {}

export default function Login(props: any) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className={'w-4/5 mb-4'}>
      <input
        className={
          'w-full bg-transparent border-0 border-b border-lighttext px-0 py-2 placeholder:text-lighttext focus:ring-0 focus:border-lighttext'
        }
        type={'text'}
        name={'email'}
        placeholder={'Email Address'}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
      <Button
        text={'Log-In'}
        link={'/'}
        className={'w-full mb-8'}
      />
      <input
        className={
          'appearance-none w-5 h-5 rounded-md text-accent bg-transparent  focus:ring-0 focus:ring-offset-0'
        }
        type={'checkbox'}
        id={'remember'}
        name={'remember'}
      />
      <label
        className={'text-darkttext tracking-def align-middle ml-3'}
        htmlFor={'remember'}
      >
        Remember me
      </label>
    </div>
  )
}
