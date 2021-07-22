import { useEffect, useState } from 'react';

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
      setValue(val, name);
      checkFunc(val, name);
   };

   // Without label err msg trad isn't updating
   useEffect(() => checkFunc(value, name), [label]);

   const input = (
      <input
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
