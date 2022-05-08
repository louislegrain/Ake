import { ThemeContext } from './theme/theme';
import { LanguageContext } from './languages/language';
import { UserContext } from './user/user';
import { SocketContext } from './sockets/socket';

export function ContextsProvider({ children }) {
   return (
      <ThemeContext>
         <LanguageContext>
            <UserContext>
               <SocketContext>{children}</SocketContext>
            </UserContext>
         </LanguageContext>
      </ThemeContext>
   );
}
