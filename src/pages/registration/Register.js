import { useContext, useEffect, useState } from 'react';
import { LeftSide } from './LeftSide';
import {
   Button,
   EmailInput,
   Input,
   LangsPicker,
   PasswordInput,
   PasswordInputWithVerifs,
} from '../../components';
import { Link } from 'react-router-dom';

import { languageContext } from '../../contexts/languages/language';

export function Register() {
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

   const nameCheck = (val, name) =>
      setErrors(err => ({
         ...err,
         [name]: val.length > 2 ? null : txt.errors.fullname,
      }));

   useEffect(() => {
      setErrors(err => ({
         ...err,
         retypePassword:
            values.password === values.retypePassword ? null : txt.errors.retypePassword,
      }));
   }, [values.password, values.retypePassword]);

   return (
      <div className="registration">
         <LangsPicker />
         <LeftSide />
         <form onSubmit={handleSubmit}>
            <h2>{txt.register}</h2>
            <Input
               checkFunc={nameCheck}
               errMsg={errors.fullname}
               name="fullname"
               placeholder={txt.placeholders.fullname}
               value={values.fullname}
               setValue={setNewValue}
            />
            <EmailInput
               setErrFunc={setErrors}
               errMsg={errors.email}
               name="email"
               placeholder={txt.placeholders.email}
               value={values.email}
               setValue={setNewValue}
            />
            <PasswordInputWithVerifs
               setErrFunc={setErrors}
               errMsg={errors.password}
               name="password"
               placeholder={txt.placeholders.password}
               value={values.password}
               setValue={setNewValue}
            />
            <PasswordInput
               errMsg={errors.retypePassword}
               name="retypePassword"
               placeholder={txt.placeholders.retypePassword}
               value={values.retypePassword}
               setValue={setNewValue}
            />
            <div className="buttons-container">
               <Button disabled={!canSubmit()}>{txt.register}</Button>
               <p className="separation">
                  <span>{txt.or}</span>
               </p>
               <Link to="/login/" className="a-btn">
                  {txt.login}
               </Link>
            </div>
         </form>
      </div>
   );
}
