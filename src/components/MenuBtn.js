import { cloneElement, useEffect, useState } from 'react';
import { Button } from './';
import { More } from './svg/More';

import '../styles/MenuBtn.css';

export function MenuBtn({ initialRotation = 0, children }) {
   const [open, setOpen] = useState(false);
   const [rotation, setRotation] = useState(initialRotation);

   const toggleMenu = () => setOpen(o => !o);

   useEffect(
      () => setRotation(open ? initialRotation + 90 : initialRotation),
      [open, initialRotation]
   );

   return (
      <>
         <Button
            className="menu-btn"
            action={toggleMenu}
            style={{ transform: `rotate(${rotation}deg)` }}
         >
            <More />
         </Button>
         {open && children && cloneElement(children, { setOpen })}
      </>
   );
}
