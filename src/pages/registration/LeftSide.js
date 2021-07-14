import { useContext } from 'react';

import '../../styles/registration.css';
import logo from '../../assets/outlined_logo.svg';

import { languageContext } from '../../contexts/languages/language';

export function LeftSide() {
   let { language: txt } = useContext(languageContext);
   txt = txt.registration.leftSide;

   return (
      <div className="left-side">
         <img src={logo} alt={txt.logoAlt} className="logo" />
         <h1>{txt.title}</h1>
      </div>
   );
}
