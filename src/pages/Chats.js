import { Chat, ConvList } from '../components/Chats';

import '../styles/Chats/Chats.css';

export function Chats() {
   return (
      <div className="chat">
         <ConvList />
         <Chat />
      </div>
   );
}
