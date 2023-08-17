import { ChangeEvent } from 'react'

export type FormInputProps = {
  name: string
  label: string
  value: string | number
  type: 'text' | 'email' | 'password'
  isError: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  required?: boolean
}

export default function FormInput({
  name,
  label,
  value,
  onChange,
  type,
  isError,
  required = false,
}: FormInputProps) {
  return (
    <label
      htmlFor={name}
      className={'block mb-6'}
    >
      {`${label}${required && '*'}`}
      <div className={'relative'}>
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          className={`relative ${isError && 'border-red-600'}`}
        />
        {isError && (
          <span className={'absolute bottom-[-1.25rem] left-0 text-red-600'}>
            {`Requires valid ${label.toLowerCase()}`}
          </span>
        )}
      </div>
    </label>
  )
}
