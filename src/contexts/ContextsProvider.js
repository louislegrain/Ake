import { ThemeContext } from './theme/theme';
import { LanguageContext } from './languages/language';
import { UserContext } from './user/user';

export function ContextsProvider({ children }) {
   return (
      <ThemeContext>
         <LanguageContext>
            <UserContext>{children}</UserContext>
         </LanguageContext>
      </ThemeContext>
   );
}
