import { useContext } from 'react';
import { Input } from './Input';

import { languageContext } from '../contexts/languages/language';

export function EmailInput({ setErrFunc, ...args }) {
   let { language: txt } = useContext(languageContext);
   txt = txt.registration.rightSide.errors;

   const emailCheck = (val, name) => {
      setErrFunc(err => ({
         ...err,
         [name]: val.match(/[^@]+@[^@]+\.[a-zA-Z]{2,6}/) ? null : txt.email,
      }));
   };

   return <Input type="email" checkFunc={emailCheck} {...args} />;
}
