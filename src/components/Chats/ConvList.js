import { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userContext } from '../../contexts/user/user';
import { useServerReq } from '../../functions/hooks';
import { TimeFromNow, MenuBtn } from '..';
import { AccountModal, ProfilePicture } from './';
import { MsgStatus } from '../svg/MsgStatus';

import '../../styles/Chats/ConvList.css';

export function ConvList() {
   const serverReq = useServerReq();
   const dispatch = useDispatch();
   const chats = useSelector(state => state.chats);
   const { user } = useContext(userContext);

   useEffect(() => {
      const controller = new AbortController();
      (async () => {
         const data = await serverReq('/conversations', { signal: controller.signal });
         if (data.ok) dispatch({ type: 'set_chats', payload: data.data.data });
      })();

      return () => controller.abort();
   }, [serverReq, dispatch]);

   return (
      <div className="conv-list">
         <div className="actions">
            <ProfilePicture />
            <MenuBtn>
               <AccountModal />
            </MenuBtn>
         </div>
         <div className="list">
            {chats.map(chat => (
               <NavLink key={chat.id} to={`/chats/${chat.id}`} activeClassName="active">
                  <ProfilePicture />
                  <div className="content">
                     <p className="name one-line">{chat.username}</p>
                     <p className="message">
                        {chat.last_msg_author === user.id && (
                           <MsgStatus read={chat.last_msg_read} />
                        )}
                        <span className="one-line">{chat.last_msg_content}</span>
                     </p>
                  </div>
                  <div className="date">
                     <TimeFromNow date={chat.updated_at} />
                  </div>
               </NavLink>
            ))}
         </div>
      </div>
   );
}
