import { useContext, useEffect, useState } from 'react';
import { languageContext } from '../contexts/languages/language';

import visibleIcon from '../assets/icons/visible.svg';
import hiddenIcon from '../assets/icons/hidden.svg';
import '../styles/passwordContainer.css';

export function PasswordInput({
   name,
   label,
   helper,
   value = '',
   setValue,
   checkFunc = () => null,
   errMsg,
   ...args
}) {
   let { language: txt } = useContext(languageContext);
   txt = txt.registration;

   const [visible, setVisible] = useState(false);
   const [displayErr, setDisplayErr] = useState(false);

   const handleChange = e => {
      setDisplayErr(true);
      let val = e.target.value;
      setValue(val, name);
      checkFunc(val, name);
   };

   useEffect(() => checkFunc(value, name), []);

   return (
      <>
         <div className="container input-container">
            <div className="flex">
               {label && <label htmlFor={name}>{label}</label>}
               {helper && <p>{helper}</p>}
            </div>
            <div className="container password-container">
               <input
                  type={visible ? 'text' : 'password'}
                  autoComplete="off"
                  name={name}
                  id={name}
                  onChange={handleChange}
                  value={value}
                  required
                  {...args}
               />
               <button type="button" onClick={() => setVisible(v => !v)}>
                  <img
                     src={visible ? visibleIcon : hiddenIcon}
                     alt={visible ? txt.eyeIcon.visible : txt.eyeIcon.hidden}
                  />
               </button>
            </div>
         </div>
         <p className="error" style={{ height: displayErr && errMsg ? '1.5rem' : '0' }}>
            {errMsg}
         </p>
      </>
   );
}
