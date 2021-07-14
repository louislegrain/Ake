import { useContext, useState } from 'react';
import { LeftSide } from './LeftSide';
import { Button, EmailInput, LangsPicker, PasswordInput } from '../../components';
import { Link } from 'react-router-dom';

import { languageContext } from '../../contexts/languages/language';

export function Login() {
   let { language: txt } = useContext(languageContext);
   txt = txt.registration.rightSide;

   const [values, setValues] = useState({});
   const [errors, setErrors] = useState({});

   const setNewValue = (val, name) => setValues(vals => ({ ...vals, [name]: val }));

   const canSubmit = () => Object.values(errors).filter(err => err !== null).length === 0;

   const handleSubmit = e => {
      e.preventDefault();
      console.log(canSubmit());
   };

   const passwordCheck = (val, name) =>
      setErrors(err => ({
         ...err,
         [name]: val.length > 0 ? null : txt.errors.emptyField,
      }));

   return (
      <div className="registration">
         <LangsPicker />
         <LeftSide />
         <form onSubmit={handleSubmit}>
            <h2>{txt.login}</h2>
            <EmailInput
               setErrFunc={setErrors}
               errMsg={errors.email}
               name="email"
               placeholder={txt.placeholders.email}
               value={values.email}
               setValue={setNewValue}
            />
            <PasswordInput
               checkFunc={passwordCheck}
               errMsg={errors.password}
               name="password"
               placeholder={txt.placeholders.password}
               value={values.password}
               setValue={setNewValue}
            />
            <div className="buttons-container">
               <Button disabled={!canSubmit()}>{txt.login}</Button>
               <p className="separation">
                  <span>{txt.or}</span>
               </p>
               <Link to="/" className="a-btn">
                  {txt.register}
               </Link>
            </div>
         </form>
      </div>
   );
}
