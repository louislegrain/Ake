import { createContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useServerReq } from '../../functions/hooks';

export const userContext = createContext();

export function UserContext({ children }) {
   const [user, setUser] = useState(
      localStorage.getItem('user')
         ? JSON.parse(localStorage.getItem('user'))
         : { logged: false, id: null }
   );
   const [userInfos, setUserInfos] = useState({});
   const history = useHistory();
   const serverReq = useServerReq({ setUser });

   useEffect(() => {
      localStorage.setItem('user', JSON.stringify(user));
      if (
         !user.logged &&
         !history.location.pathname.startsWith('/login') &&
         !history.location.pathname.startsWith('/register')
      ) {
         history.replace('/login/');
      } else if (
         user.logged &&
         !(user.id && userInfos.email && userInfos.username && userInfos.description)
      ) {
         (async () => {
            const data = await serverReq('/user/account/informations');
            if (data.ok) {
               const { id, username, email, description } = data.data.data;
               setUser({ logged: true, id });
               setUserInfos({ username, email, description });
            }
         })();
      }
   }, [user, userInfos, history, serverReq]);

   return (
      <userContext.Provider value={{ user, userInfos, setUser, setUserInfos }}>
         {children}
      </userContext.Provider>
   );
}
