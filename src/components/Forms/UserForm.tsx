'use client'

import { ChangeEvent, useReducer } from 'react'
import FormInput from './FormInput'

function reducer(state: UserFormState, action: UserFormPayload) {
  switch (action.type) {
    case 'first':
      return {
        ...state,
        first: action.payload,
      }
    case 'last':
      return {
        ...state,
        last: action.payload,
      }
    case 'email':
      return {
        ...state,
        email: action.payload,
      }
    default:
      throw Error(`Unknown Form Action: ${action.type}`)
  }
}

export default function UserForm() {
  const [formState, dispatch] = useReducer(reducer, {
    first: {
      value: '',
      isError: false,
    },
    last: {
      value: '',
      isError: false,
    },
    email: {
      value: '',
      isError: false,
    },
  })

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { id: field, value } = e.target

    dispatch({ type: field, payload: { value, isError: !!!value } })
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        console.log('Form submitted: ', formState)
      }}
    >
      <FormInput
        required
        label={'First Name'}
        name={'first'}
        type={'text'}
        value={formState.first.value}
        isError={formState.first.isError}
        onChange={handleInput}
      />
      <FormInput
        required
        label={'Last Name'}
        name={'last'}
        type={'text'}
        value={formState.last.value}
        isError={formState.last.isError}
        onChange={handleInput}
      />
      <FormInput
        required
        label={'Email'}
        name={'email'}
        type={'email'}
        value={formState.email.value}
        isError={formState.email.isError}
        onChange={handleInput}
      />
      <button>Submit</button>
    </form>
  )
}
