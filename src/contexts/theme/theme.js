import { createContext, useEffect, useState } from 'react';

export const themeContext = createContext();

export function ThemeContext({ children }) {
   const isValidTheme = theme => theme === 'light' || theme === 'dark';

   const returnValidTheme = (theme = '') =>
      isValidTheme(theme)
         ? theme
         : isValidTheme(localStorage.getItem('theme'))
         ? localStorage.getItem('theme')
         : window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
         ? 'dark'
         : 'light';

   const [theme, setTheme] = useState(returnValidTheme());

   const setNewTheme = theme => setTheme(returnValidTheme(theme));

   useEffect(() => {
      localStorage.setItem('theme', theme);
      if (theme === 'dark') {
         document.body.classList.add('dark');
      } else {
         document.body.classList.remove('dark');
      }
   }, [theme]);

   return (
      <themeContext.Provider
         value={{
            theme,
            setTheme: setNewTheme,
         }}
      >
         {children}
      </themeContext.Provider>
   );
}
