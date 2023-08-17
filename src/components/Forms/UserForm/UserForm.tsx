'use client'

import { ChangeEvent, useState } from 'react'
import FormInput from '../FormInput/FormInput'

export default function UserForm() {
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [email, setEmail] = useState('')

  return (
    <form
      onSubmit={() => console.log('Form submitted: ', { first, last, email })}
    >
      <FormInput
        label={'First Name'}
        name={'first'}
        type={'text'}
        value={first}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setFirst(e.target.value)
        }
        required
      />
      <FormInput
        label={'Last Name'}
        name={'last'}
        type={'text'}
        value={last}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setLast(e.target.value)}
        required
      />
      <FormInput
        label={'Email'}
        name={'email'}
        type={'email'}
        value={email}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
        required
      />
    </form>
  )
}
