import { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { languageContext } from '../../contexts/languages/language';
import { InfoBanner } from '../';
import { ChatList, Error, MessageForm, UserBanner } from './';

import '../../styles/Chats/Chat.css';

export function Chat() {
   const txt = useContext(languageContext).language.chats.errors;

   const [reqErr, setReqErr] = useState({ msg: '', forceRender: 0 });
   const { id } = useParams();
   const chats = useSelector(state => state.chats);

   return (
      <div className="conv">
         {chats.find(chat => chat.id === id * 1) ? (
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
