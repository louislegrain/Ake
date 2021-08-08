import { useEffect, useState } from 'react';

import '../styles/Input.css';
import '../styles/inputContainer.css';

export function Input({
   name,
   label,
   helper,
   value = '',
   setValue,
   checkFunc = () => null,
   errMsg,
   ...args
}) {
   const [displayErr, setDisplayErr] = useState(false);

   const handleChange = e => {
      setDisplayErr(true);
      const val = e.target.value;
      setValue(name, val);
      checkFunc(name, val);
   };

   // Without label err msg trad isn't updating
   // eslint-disable-next-line
   useEffect(() => checkFunc(name, value), [label]);

   const input = (
      <input
         className="input"
         type="text"
         autoComplete="off"
         name={name}
         id={name}
         onChange={handleChange}
         value={value}
         required
         {...args}
      />
   );

   return (
      <>
         {label || helper ? (
            <div className="container input-container">
               <div className="flex">
                  {label && <label htmlFor={name}>{label}</label>}
                  {helper && <p>{helper}</p>}
               </div>
               {input}
            </div>
         ) : (
            input
         )}
         <p className="error" style={{ height: displayErr && errMsg ? '1.5rem' : '0' }}>
            {errMsg}
         </p>
      </>
   );
}
