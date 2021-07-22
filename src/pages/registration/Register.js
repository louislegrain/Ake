import { useContext, useEffect, useState } from 'react';
import {
   Button,
   EmailInput,
   Input,
   LangsPicker,
   PasswordInput,
   PasswordInputWithVerifs,
} from '../../components';
import { updateErrors, minLength } from '../../functions/verifs';
import { languageContext } from '../../contexts/languages/language';

import outlinedLogo from '../../assets/imgs/outlined_logo.svg';
import '../../styles/registration.css';

export function Register() {
   let { language: txt } = useContext(languageContext);
   txt = txt.registration;

   const [values, setValues] = useState({});
   const [errors, setErrors] = useState({});

   const setNewValue = (val, name) => setValues(vals => ({ ...vals, [name]: val }));

   const canSubmit = () => Object.values(errors).filter(err => err !== null).length === 0;

   const handleSubmit = e => {
      e.preventDefault();
      console.log(canSubmit());
   };

   const nameCheck = (val, name) =>
      updateErrors(setErrors, name, minLength(val, 3, txt.errors.fullname));

   useEffect(
      () =>
         updateErrors(
            setErrors,
            'retypePassword',
            values.password === values.retypePassword ? null : txt.errors.retypePassword
         ),
      [values.password, values.retypePassword, txt.errors.retypePassword]
   );

   return (
      <div className="registration">
         <LangsPicker />
         <form onSubmit={handleSubmit}>
            <img src={outlinedLogo} alt={txt.logoAlt} className="logo" />
            <h1>{txt.titles.register}</h1>
            <Input
               checkFunc={nameCheck}
               errMsg={errors.fullname}
               name="fullname"
               label={txt.labels.fullname}
               value={values.fullname}
               setValue={setNewValue}
            />
            <EmailInput
               setErrFunc={setErrors}
               errMsg={errors.email}
               name="email"
               label={txt.labels.email}
               value={values.email}
               setValue={setNewValue}
            />
            <PasswordInputWithVerifs
               setErrFunc={setErrors}
               errMsg={errors.password}
               name="password"
               label={txt.labels.password}
               helper={txt.helpers.strongPassword}
               value={values.password}
               setValue={setNewValue}
            />
            <PasswordInput
               errMsg={errors.retypePassword}
               name="retypePassword"
               label={txt.labels.retypePassword}
               value={values.retypePassword}
               setValue={setNewValue}
            />
            <div className="form-footer">
               <Button primary disabled={!canSubmit()}>
                  {txt.register}
               </Button>
               <p>{txt.termsOfUse}</p>
            </div>
         </form>
      </div>
   );
}
