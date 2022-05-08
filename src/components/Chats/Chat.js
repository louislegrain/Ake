import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { languageContext } from '../../contexts/languages/language';
import { userContext } from '../../contexts/user/user';
import { useServerReq } from '../../functions/hooks';
import { InfoBanner } from '../';
import { ChatList, Error, MessageForm, UserBanner } from './';

import '../../styles/Chats/Chat.css';

export function Chat() {
   const txt = useContext(languageContext).language.chats.errors;

   const serverReq = useServerReq();
   const dispatch = useDispatch();
   const { user } = useContext(userContext);
   const [reqErr, setReqErr] = useState({ msg: '', forceRender: 0 });
   const { id } = useParams();
   const chats = useSelector(state => state.chats);
   const curChat = chats.find(chat => chat.id === id);

   useEffect(() => {
      if (!curChat || curChat.description) return;

      const controller = new AbortController();
      (async () => {
         const data = await serverReq(
            `/user/other/account/?user_id=${curChat.last_msg_author}`,
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
      <div className="conv">
         {curChat ? (
            <>
               <InfoBanner msg={reqErr} error={true} />
               <UserBanner />
               <ChatList />
               <MessageForm setReqErr={setReqErr} />
            </>
         ) : (
            <Error
               title={
                  chats.length > 0
                     ? id
                        ? txt.titles.notFoundChat
                        : txt.titles.noSelectedChat
                     : txt.titles.emptyChats
               }
               error={
                  chats.length > 0
                     ? id
                        ? txt.errors.notFoundChat
                        : txt.errors.noSelectedChat
                     : txt.errors.emptyChats
               }
            />
         )}
      </div>
   );
}
