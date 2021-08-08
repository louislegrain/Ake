import { memo, useContext } from 'react';
import { userContext } from '../../contexts/user/user';
import { prettyHour } from '../../functions/prettyHour';
import { MsgStatus } from '../svg/MsgStatus';

import '../../styles/Chats/Message.css';

export const Message = memo(({ msg, nextMsg }) => {
   const { user } = useContext(userContext);

   return (
      <>
         <div className={`${msg.author === user.id ? 'self ' : ''}message-bubble`}>
            {msg.content}
         </div>
         {!nextMsg ||
         nextMsg.author !== msg.author ||
         (new Date(nextMsg.created_at) - new Date(msg.created_at)) / 3600000 > 2 ? (
            <div className={`${msg.author === user.id ? 'self ' : ''}date`}>
               {prettyHour(new Date(msg.created_at))}
               {msg.author === user.id && <MsgStatus read={msg.read} />}
            </div>
         ) : null}
      </>
   );
});
