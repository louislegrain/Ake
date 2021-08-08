import { useContext } from 'react';
import { PasswordInput } from './PasswordInput';

import { languageContext } from '../contexts/languages/language';

export function PasswordInputWithVerifs({ setErrFunc, ...args }) {
   const txt = useContext(languageContext).language.registration.errors;

   const passwordCheck = (name, val) => {
      const verifs = {
         '^.{8,}$': txt.passwordMin8Caracts,
         '[0-9]': txt.passwordMin1Number,
         '[A-Z]': txt.passwordMin1MajLetter,
         '[a-z]': txt.passwordMin1MinLetter,
         '.*[!@#$%^&*]+': txt.passwordMin1SpecialCaract,
      };
      Object.entries(verifs).every(([key, value]) => {
         if (!val.match(new RegExp(key))) {
            setErrFunc(name, value);
            return false;
         }
         setErrFunc(name, null);
         return true;
      });
   };

   return <PasswordInput checkFunc={passwordCheck} {...args} />;
}
