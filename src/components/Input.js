import { useEffect, useState } from 'react';

export function Input({
   name,
   value = '',
   setValue,
   checkFunc = () => null,
   errMsg,
   ...args
}) {
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
         <input
            type="text"
            autoComplete="off"
            name={name}
            onChange={handleChange}
            value={value}
            required
            {...args}
         />
         <p className="error" style={{ height: displayErr && errMsg ? '1.5rem' : '0' }}>
            {errMsg}
         </p>
      </>
   );
}
