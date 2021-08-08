import { useContext, useEffect, useState } from 'react';
import { Modal, Input, EmailInput, DarkModeToggle } from '../';
import { languageContext } from '../../contexts/languages/language';
import { userContext } from '../../contexts/user/user';
import { ProfilePicture } from './';
import { useObjState } from '../../functions/hooks';
import { minLength } from '../../functions/verifs';

export function AccountModal({ setOpen }) {
   const tradTxt = useContext(languageContext).language;
   const txt = tradTxt.registration;

   const { userInfos } = useContext(userContext);
   const [edited, setEdited] = useState(false);
   const [values, setValuesFunc, setAllValues] = useObjState(userInfos);
   const [errors, setErrors] = useObjState();

   const setValues = (name, val) => {
      setValuesFunc(name, val);
      setEdited(true);
   };

   useEffect(() => {
      if (!edited) {
         setAllValues(userInfos);
      }
   }, [userInfos, edited, setAllValues]);

   const closeMenu = () => setOpen(false);

   const nameCheck = (name, val) => setErrors(name, minLength(val, 3, txt.errors.username));

   const canSubmit = () => Object.values(errors).filter(err => err !== null).length === 0;

   const handleSubmit = e => {
      e.preventDefault();
      console.log(canSubmit());
   };

   return (
      <Modal close={closeMenu}>
         <div className="head">
            <p className="title">{tradTxt.modals.account.account}</p>
            <ProfilePicture />
         </div>
         <form onSubmit={handleSubmit}>
            <Input
               checkFunc={nameCheck}
               errMsg={errors.username}
               name="username"
               label={txt.labels.username}
               value={values.username}
               setValue={setValues}
            />
            <Input
               name="description"
               label={txt.labels.description}
               helper={txt.helpers.optional}
               value={values.description}
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
         </form>
         <p className="label">{txt.labels.darkMode}</p>
         <DarkModeToggle />
      </Modal>
   );
}
