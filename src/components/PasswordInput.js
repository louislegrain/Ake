import { useContext, useEffect, useState } from 'react';
import { languageContext } from '../contexts/languages/language';

import visibleIcon from '../assets/icons/visible.svg';
import hiddenIcon from '../assets/icons/hidden.svg';
import '../styles/Input.css';
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
   const txt = useContext(languageContext).language.icons;

   const [visible, setVisible] = useState(false);
   const [displayErr, setDisplayErr] = useState(false);

   const handleChange = e => {
      setDisplayErr(true);
      const val = e.target.value;
      setValue(name, val);
      checkFunc(name, val);
   };

   // eslint-disable-next-line
   useEffect(() => checkFunc(name, value), [label]);

   return (
      <>
         <div className="container input-container">
            <div className="flex">
               {label && <label htmlFor={name}>{label}</label>}
               {helper && <p>{helper}</p>}
            </div>
            <div className="container password-container">
               <input
                  className="input"
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
                     alt={visible ? txt.eye.visible : txt.eye.hidden}
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
