import { useContext, useState } from 'react';
import { Button, EmailInput, LangsPicker, PasswordInput } from '../../components';
import { updateErrors, minLength } from '../../functions/verifs';
import { languageContext } from '../../contexts/languages/language';

import outlinedLogo from '../../assets/imgs/outlined_logo.svg';
import '../../styles/registration.css';

export function Login() {
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

   const passwordCheck = (val, name) =>
      updateErrors(setErrors, name, minLength(val, 1, txt.errors.emptyField));

   return (
      <div className="registration">
         <LangsPicker />
         <form onSubmit={handleSubmit}>
            <img src={outlinedLogo} alt={txt.logoAlt} className="logo" />
            <h1>{txt.titles.login}</h1>
            <EmailInput
               setErrFunc={setErrors}
               errMsg={errors.email}
               name="email"
               label={txt.labels.email}
               value={values.email}
               setValue={setNewValue}
            />
            <PasswordInput
               checkFunc={passwordCheck}
               errMsg={errors.password}
               name="password"
               label={txt.labels.password}
               value={values.password}
               setValue={setNewValue}
            />
            <div className="form-footer">
               <Button primary disabled={!canSubmit()}>
                  {txt.login}
               </Button>
               <p>{txt.loginFooter}</p>
            </div>
         </form>
      </div>
   );
}
