import { useContext } from 'react';
import { Input } from './Input';

import { languageContext } from '../contexts/languages/language';

export function EmailInput({ setErrFunc, ...args }) {
   const txt = useContext(languageContext).language.registration.errors;

   const emailCheck = (name, val) =>
      setErrFunc(name, val.match(/[^@]+@[^@]+\.[a-zA-Z]{2,6}/) ? null : txt.email);

   return <Input type="email" checkFunc={emailCheck} {...args} />;
}
