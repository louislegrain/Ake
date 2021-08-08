import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { userContext } from '../../contexts/user/user';
import { useServerReq } from '../../functions/hooks';
import { ProfilePicture } from './';
import { MenuBtn } from '../';

import '../../styles/Chats/UserBanner.css';

export function UserBanner() {
   const serverReq = useServerReq();
   const id = useParams().id * 1;
   const chats = useSelector(state => state.chats);
   const dispatch = useDispatch();
   const { user } = useContext(userContext);

   const curChat = chats.find(chat => chat.id === id);

   useEffect(() => {
      if (curChat.description) return;

      const controller = new AbortController();
      (async () => {
         const data = await serverReq(
            `/user/other/account/?user_id=${
               curChat.author === user.id ? curChat.receiver : curChat.author
            }`,
            {
               signal: controller.signal,
            }
         );
         if (data.ok)
            dispatch({
               type: 'replace_chat',
               payload: {
                  id,
                  state: {
                     description: data.data.data.description,
                  },
               },
            });
      })();

      return () => controller.abort();
   }, [id, curChat, user.id, dispatch, serverReq]);

   return (
      <div className="user-banner">
         <ProfilePicture />
         <div className="infos">
            {curChat && <div className="username one-line">{curChat.username}</div>}
            {curChat && curChat.description && (
               <div className="description one-line">{curChat.description}</div>
            )}
         </div>
         <MenuBtn>{/* Menu */}</MenuBtn>
      </div>
   );
}
