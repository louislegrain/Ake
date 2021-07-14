import { createContext, useEffect, useState } from 'react';

import en from './en';
import fr from './fr';

const languages = { en, fr };

export const languageContext = createContext();

export function LanguageContext({ children }) {
   const supportedLangs = Object.keys(languages);

   const returnValidLanguage = lang =>
      supportedLangs.includes(lang)
         ? lang
         : supportedLangs.includes(navigator.language.substr(0, 2))
         ? navigator.language.substr(0, 2)
         : 'en';

   const [language, setLanguage] = useState(
      returnValidLanguage(localStorage.getItem('language'))
   );

   useEffect(() => {
      localStorage.setItem('language', language);
      document.documentElement.lang = language;
   }, [language]);

   const setNewLanguage = lang => setLanguage(returnValidLanguage(lang));

   return (
      <languageContext.Provider
         value={{
            current: language,
            language: languages[language],
            setLanguage: setNewLanguage,
         }}
      >
         {children}
      </languageContext.Provider>
   );
}
