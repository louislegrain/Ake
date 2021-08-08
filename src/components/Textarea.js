import { useEffect, useRef } from 'react';

import '../styles/Textarea.css';

export function Textarea({ onChange, value = null, ...args }) {
   const textarea = useRef();

   const resize = () => {
      const el = textarea.current;
      el.style.height = '0';
      el.style.height = `${el.scrollHeight}px`;
   };

   const handleChange = e => {
      onChange(e);
      resize();
   };

   useEffect(() => {
      window.addEventListener('resize', resize);
      return () => window.removeEventListener('resize', resize);
   }, []);

   useEffect(resize, [value]);

   return (
      <textarea
         ref={textarea}
         rows="1"
         cols="1"
         onChange={handleChange}
         value={value}
         {...args}
      ></textarea>
   );
}
