import { useCallback, useContext } from 'react';
import { languageContext } from '../../contexts/languages/language';
import { userContext } from '../../contexts/user/user';
import { api_url } from '../../variables';

export function useServerReq(user) {
   const userCtx = useContext(userContext);
   const { setUser } = user ? user : userCtx;

   const serverReq = useCallback(
      async (path, options = {}) => {
         let res = { status: null };
         let data = null;
         try {
            res = await fetch(api_url + path, { credentials: 'include', ...options });
            data = await res.json();
         } catch {}
         if (res) {
            if (res.status >= 200 && res.status < 300) {
               return { ok: true, data };
            } else if (res.status === 401) {
               setUser({ logged: false, force: true });
            }
         }
         return { ok: false, res, data };
      },
      [setUser]
   );

   return serverReq;
}

export function useGetError() {
   const txt = useContext(languageContext).language.statusErrors;
   return status => (txt[status] ? txt[status] : txt.default);
}
