export function updateErrors(updateStateFunc, name, newErr) {
   updateStateFunc(err => ({
      ...err,
      [name]: newErr,
   }));
}
