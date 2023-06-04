import { useState } from "react";

export const useBoolean = (initial: boolean = false) => {
  const [state, setState] = useState(initial);

  const controller = {
    on: () => setState(true),
    off: () => setState(false),
    toggle: () => setState((s) => !s),
  };

  return [state, controller] as const;
};
