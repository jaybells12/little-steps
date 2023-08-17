import { ChangeEvent } from 'react'

export type FormInputProps = {
  name: string
  label: string
  value: string | number
  type: 'text' | 'email' | 'password'
  onChange: (e: ChangeEvent) => void
  required?: boolean
}

export default function FormInput({
  name,
  label,
  value,
  onChange,
  type,
  required = false,
}: FormInputProps) {
  return (
    <label htmlFor={name}>
      {label}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
      />
    </label>
  )
}
