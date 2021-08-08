import { useContext, useEffect, useState } from 'react';
import { languageContext } from '../contexts/languages/language';

import crossIcon from '../assets/icons/cross.svg';
import '../styles/InfoBanner.css';

export function InfoBanner({ msg, error = false }) {
   const txt = useContext(languageContext).language.icons;

   const [visible, setVisible] = useState(!!msg.msg);

   const hideBanner = () => setVisible(false);

   useEffect(() => setVisible(!!msg.msg), [msg]);

   return (
      <div
         className={`${error ? 'error ' : ''}info-banner`}
         style={{ transform: `translateY(${visible ? '0' : '-100%'})` }}
      >
         {msg.msg}
         <button onClick={hideBanner}>
            <img src={crossIcon} alt={txt.cross} />
         </button>
      </div>
   );
}
