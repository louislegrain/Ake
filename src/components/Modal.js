import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import '../styles/Modal.css';

export function Modal({ close, children }) {
   const modal = useRef();

   useEffect(() => {
      const esc = ({ key }) => {
         if (key === 'Escape') close();
      };

      window.addEventListener('keydown', esc);

      return () => window.removeEventListener('keydown', esc);
   }, [close]);

   const closeModal = ({ target }) => {
      if (target === modal.current) close();
   };

   return createPortal(
      <div className="modal" ref={modal} onClick={closeModal}>
         <div>{children}</div>
      </div>,
      document.getElementById('root')
   );
}
