import { useContext } from 'react';

import { languageContext } from '../contexts/languages/language';

export function LangsPicker() {
   const { current, setLanguage } = useContext(languageContext);

   const languagesList = {
      en: 'English',
      fr: 'Français',
   };

   const changeAppLang = e => setLanguage(e.target.value);

   return (
      <select className="lang-picker" onChange={changeAppLang} value={current}>
         {Object.entries(languagesList).map(([key, value]) => (
            <option key={key} value={key}>
               {value}
            </option>
         ))}
      </select>
   );
}
