import { useState } from 'react'
/**
 * Hook for setting/reading a boolean value
 * @param {boolean} initial initial value
 * @returns {array} tuple with state value and controller object
 */
export const useBoolean = (initial: boolean = false) => {
  const [state, setState] = useState(initial)

  const controller = {
    on: () => setState(true),
    off: () => setState(false),
    toggle: () => setState((s) => !s),
  }

  return [state, controller] as const
}
