export function minLength(val, minLength, errMsg) {
   return val.length >= minLength ? null : errMsg;
}
