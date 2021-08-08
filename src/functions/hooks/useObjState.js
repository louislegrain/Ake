import { useCallback, useState } from 'react';

export function useObjState(initialState = {}) {
   const [state, setState] = useState(initialState);

   const setNewValue = useCallback((key, val) => setState(s => ({ ...s, [key]: val })), []);

   return [state, setNewValue, setState];
}
