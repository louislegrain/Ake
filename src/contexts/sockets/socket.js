import { createContext, useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { userContext } from '../user/user';
import { api_url } from '../../config';
import { useServerReq } from '../../functions/hooks';

export const socketContext = createContext();

export function SocketContext({ children }) {
   const [socket, setSocket] = useState();
   const { user } = useContext(userContext);
   const serverReq = useServerReq();

   useEffect(() => {
      const controller = new AbortController();
      (async () => {
         const data = await serverReq('/auth/sockets/token', {
            signal: controller.signal,
         });
         if (data.ok) {
            const newState = io(api_url, {
               auth: {
                  user_id: user.id,
                  token: data.data.data.token,
               },
            });
            setSocket(newState);
            newState.on('disconnect', () => console.log('disconnected'));
         }
      })();

      return () => controller.abort();
   }, [serverReq, user.id]);

   return <socketContext.Provider value={{ socket }}>{children}</socketContext.Provider>;
}
