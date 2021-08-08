import { useContext, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { userContext } from '../../contexts/user/user';
import { Button, EmailInput, LangsPicker, PasswordInput, InfoBanner } from '../../components';
import { minLength } from '../../functions/verifs';
import { languageContext } from '../../contexts/languages/language';
import { useGetError, useServerReq, useObjState } from '../../functions/hooks';

import outlinedLogo from '../../assets/imgs/outlined_logo.svg';
import '../../styles/registration.css';

export function Login() {
   const txt = useContext(languageContext).language.registration;

   const [values, setValues] = useObjState();
   const [errors, setErrors] = useObjState();
   const [reqErr, setReqErr] = useState({ msg: '', forceRender: 0 });
   const [loading, setLoading] = useState(false);
   const form = useRef();
   const history = useHistory();
   const serverReq = useServerReq();
   const getError = useGetError();
   const { user, setUser } = useContext(userContext);

   const canSubmit = () => Object.values(errors).filter(err => err !== null).length === 0;

   const handleChange = () => setReqErr(err => ({ ...err, msg: '' }));

   const handleSubmit = async e => {
      e.preventDefault();
      handleChange();
      if (canSubmit()) {
         setLoading(true);
         const formdata = new FormData(form.current);
         const data = await serverReq('/login', {
            method: 'POST',
            body: formdata,
         });
         setTimeout(() => {
            if (data.ok) {
               setUser({ logged: true, id: null });
               history.push('/chats');
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

   const passwordCheck = (name, val) =>
      setErrors(name, minLength(val, 1, txt.errors.emptyField));

   return (
      <div className="registration">
         <InfoBanner msg={{ msg: loading ? 'Chargement...' : '' }} />
         <InfoBanner msg={reqErr} error={true} />
         <LangsPicker />
         <form onSubmit={handleSubmit} onChange={handleChange} ref={form}>
            <img src={outlinedLogo} alt={txt.logoAlt} className="logo" />
            <h1>{txt.titles.login}</h1>
            <EmailInput
               setErrFunc={setErrors}
               errMsg={errors.email}
               name="email"
               label={txt.labels.email}
               value={values.email}
               setValue={setValues}
            />
            <PasswordInput
               checkFunc={passwordCheck}
               errMsg={errors.password}
               name="password"
               label={txt.labels.password}
               value={values.password}
               setValue={setValues}
            />
            <div className="form-footer">
               <Button primary disabled={!canSubmit() || loading}>
                  {txt.login}
               </Button>
               <p>{txt.loginFooter}</p>
            </div>
         </form>
      </div>
   );
}
