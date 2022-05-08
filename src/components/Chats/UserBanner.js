import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ProfilePicture } from './';
import { MenuBtn } from '../';

import '../../styles/Chats/UserBanner.css';

export function UserBanner() {
   const { id } = useParams();
   const chats = useSelector(state => state.chats);

   const curChat = chats.find(chat => chat.id === id);

   return (
      <div className="user-banner">
         <ProfilePicture />
         <div className="infos">
            {curChat && <div className="username one-line">{curChat.receiver_username}</div>}
            {curChat && curChat.description && (
               <div className="description one-line">{curChat.description}</div>
            )}
         </div>
         <MenuBtn>{/* Menu */}</MenuBtn>
      </div>
   );
}
