import { useContext, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { userContext } from '../../contexts/user/user';
import {
   Button,
   EmailInput,
   InfoBanner,
   Input,
   LangsPicker,
   PasswordInput,
   PasswordInputWithVerifs,
} from '../../components';
import { minLength } from '../../functions/verifs';
import { languageContext } from '../../contexts/languages/language';
import { useGetError, useObjState, useServerReq } from '../../functions/hooks';

import outlinedLogo from '../../assets/imgs/outlined_logo.svg';
import '../../styles/registration.css';

export function Register() {
   const txt = useContext(languageContext).language.registration;

   const [values, setValues] = useObjState();
   const [errors, setErrors] = useObjState();
   const [reqErr, setReqErr] = useState({ msg: '', forceRender: 0 });
   const [loading, setLoading] = useState(false);
   const form = useRef();
   const history = useHistory();
   const serverReq = useServerReq();
   const getError = useGetError();
   const { user } = useContext(userContext);

   const canSubmit = () => Object.values(errors).filter(err => err !== null).length === 0;

   const handleChange = () => setReqErr(err => ({ ...err, msg: '' }));

   const handleSubmit = async e => {
      e.preventDefault();
      handleChange();
      if (canSubmit()) {
         setLoading(true);
         const formdata = new FormData(form.current);
         formdata.delete('retypePassword');
         const data = await serverReq('/register', {
            method: 'POST',
            body: formdata,
         });
         setTimeout(() => {
            if (data.ok) {
               history.push('/register/finish/');
            } else {
               setReqErr(err => ({
                  msg: getError(data.res.status),
                  forceRender: err.forceRender + 1,
               }));
               setLoading(false);
            }
         }, 500);
      }
   };

   useEffect(() => {
      if (user.logged) history.push('/chats');
      // eslint-disable-next-line
   }, []);

   const nameCheck = (name, val) => setErrors(name, minLength(val, 3, txt.errors.username));

   useEffect(() => {
      setErrors(
         'retypePassword',
         values.password === values.retypePassword ? null : txt.errors.retypePassword
      );
   }, [values.password, values.retypePassword, txt.errors.retypePassword, setErrors]);

   return (
      <div className="registration">
         <InfoBanner msg={{ msg: loading ? 'Chargement...' : '' }} />
         <InfoBanner msg={reqErr} error={true} />
         <LangsPicker />
         <form onSubmit={handleSubmit} ref={form}>
            <img src={outlinedLogo} alt={txt.logoAlt} className="logo" />
            <h1>{txt.titles.register}</h1>
            <Input
               checkFunc={nameCheck}
               errMsg={errors.username}
               name="username"
               label={txt.labels.username}
               value={values.username}
               setValue={setValues}
            />
            <EmailInput
               setErrFunc={setErrors}
               errMsg={errors.email}
               name="email"
               label={txt.labels.email}
               value={values.email}
               setValue={setValues}
            />
            <PasswordInputWithVerifs
               setErrFunc={setErrors}
               errMsg={errors.password}
               name="password"
               label={txt.labels.password}
               helper={txt.helpers.strongPassword}
               value={values.password}
               setValue={setValues}
            />
            <PasswordInput
               errMsg={errors.retypePassword}
               name="retypePassword"
               label={txt.labels.retypePassword}
               value={values.retypePassword}
               setValue={setValues}
            />
            <div className="form-footer">
               <Button primary disabled={!canSubmit() || loading}>
                  {txt.register}
               </Button>
               <p>{txt.termsOfUse}</p>
            </div>
         </form>
      </div>
   );
}
