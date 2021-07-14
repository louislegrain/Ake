import { useContext, useEffect, useState } from 'react';

import visibleIcon from '../assets/icons/visible.svg';
import hiddenIcon from '../assets/icons/hidden.svg';

import { languageContext } from '../contexts/languages/language';

export function PasswordInput({
   name,
   value = '',
   setValue,
   checkFunc = () => null,
   errMsg,
   ...args
}) {
   let { language: txt } = useContext(languageContext);
   txt = txt.registration.rightSide;

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
         <div className="input-container">
            <input
               type={visible ? 'text' : 'password'}
               autoComplete="off"
               name={name}
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
         <p className="error" style={{ height: displayErr && errMsg ? '1.5rem' : '0' }}>
            {errMsg}
         </p>
      </>
   );
}
