import { ThemeContext } from './theme/theme';
import { LanguageContext } from './languages/language';

export function ContextsProvider({ children }) {
   return (
      <ThemeContext>
         <LanguageContext>{children}</LanguageContext>
      </ThemeContext>
   );
}
