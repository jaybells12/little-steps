'use client'

/**
 * Generic Form Component
 * @param formType String value representing the model the form is based on
 * @param isEdit Boolean value indicating which map is used to build the form
 */

import { Fragment, useMemo, useState } from 'react'
// import { useSelectedLayoutSegments } from 'next/navigation'
import editMap from './edit-form-map'
import newMap from './new-form-map'

export type FormProps = {
  formType: FormTypes
  isEdit?: boolean
  className?: string
  labelStyles?: string
  inputStyles?: string
}

const DEFAULT_OPTIONS = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']

// Can formtype and isEdit be extrapolated from the route segment?
// Might change how the css is being handled (especially for the select element)
export const Form = ({ formType, isEdit = false, className = '', labelStyles = '', inputStyles = '' }: FormProps) => {
  const [inputs, setInputs] = useState<{ [key: string]: string }>({})

  // Select the map to be used for generating the form
  const fieldMap = useMemo(() => (isEdit ? editMap : newMap), [isEdit])
  const fields = useMemo(() => fieldMap[formType], [formType])

  // WILL COME BACK TO THIS LATER
  // Returns an array from the layout the hook was called from--- need to test this.
  // index 0 = form type
  // const segments = useSelectedLayoutSegments()

  // Generate the map
  const generatedForm = Object.entries(fields).map(([key, value], idx) => {
    // Create label text
    let title = key[0].toUpperCase() + key.slice(1).toLowerCase()

    // Here : how will i retrieve the option values from the database?
    if (value === 'select' || value === 'multiselect') {
      const options = DEFAULT_OPTIONS.map((option, idx) => (
        <option
          key={idx}
          value={option}>
          {option}
        </option>
      ))
      // Select/Multiselect inputs
      return (
        <Fragment key={idx}>
          <label
            htmlFor={key}
            className={labelStyles}>
            {title}
          </label>
          <select
            required
            id={key}
            className={inputStyles}
            defaultValue={''}
            multiple={value === 'multiselect'}
            onChange={(e) => setInputs((prev) => ({ ...prev, [key]: e.target.value }))}>
            <option
              value=''
              disabled>
              Select an option...
            </option>
            {options}
          </select>
        </Fragment>
      )
    }
    // Non select inputs
    return (
      <Fragment key={idx}>
        <label
          htmlFor={key}
          className={labelStyles}>
          {title}
        </label>
        <input
          required
          id={key}
          className={inputStyles}
          type={`${value}`}
          value={inputs[key] || ''}
          onChange={(e) => setInputs((prev) => ({ ...prev, [key]: e.target.value }))}
        />
      </Fragment>
    )
  })

  // Form needs server action that matches the formType and Create/update
  return (
    <>
      <form
        name={formType}
        className={className}>
        {generatedForm}
        <button>Submit</button>
      </form>
      <button
        className={'p-2 m-2 border-black border hover:bg-black hover:text-white'}
        onClick={() => console.log(inputs)}>
        Show inputs
      </button>
    </>
  )
}
