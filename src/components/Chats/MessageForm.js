import { useContext, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { languageContext } from '../../contexts/languages/language';
import { userContext } from '../../contexts/user/user';
import { useGetError, useServerReq } from '../../functions/hooks';
import { Button, Textarea } from '../';
import { socketContext } from '../../contexts/sockets/socket';

import paperplaneIcon from '../../assets/icons/paperplane.svg';
import '../../styles/Chats/MessageForm.css';

export function MessageForm({ setReqErr }) {
   const txt = useContext(languageContext).language;

   const [message, setMessage] = useState('');
   const form = useRef();
   const getError = useGetError();
   const serverReq = useServerReq();
   const { user } = useContext(userContext);
   const id = useParams().id * 1;
   const dispatch = useDispatch();
   const convs = useSelector(state => state.convs);
   const chats = useSelector(state => state.chats);
   const { socket } = useContext(socketContext);

   const curChat = chats.find(chat => chat.id === id + '');

   const handleChange = e => setMessage(e.target.value);

   const formChange = () => setReqErr(err => ({ ...err, msg: '' }));

   const handleSubmit = async e => {
      if (e) e.preventDefault();
      if (message === '' || !convs[id]) return;
      const sentMsg = message;
      formChange();
      setMessage('');
      const formdata = new FormData(form.current);
      formdata.append('conv_id', id);
      socket.emit('message', {
         content: formdata.get('content'),
         to: curChat.participants[0].user_id,
      });
      const data = await serverReq('/message/send', {
         method: 'POST',
         body: formdata,
      });
      if (data.ok) {
         dispatch({
            type: 'new_msg',
            payload: {
               id,
               state: {
                  author: user.id,
                  content: sentMsg,
                  created_at: new Date().toISOString(),
                  id: new Date().getTime(),
               },
            },
         });
      } else {
         setReqErr(err => ({
            msg: getError(data.res.status),
            forceRender: err.forceRender + 1,
         }));
         setMessage(sentMsg);
      }
   };

   const handleKeyDown = e => {
      if (e.key === 'Enter' && !e.shiftKey) {
         e.preventDefault();
         handleSubmit();
      }
   };

   return (
      <form onSubmit={handleSubmit} ref={form} className="message-form">
         <div className="message-bubble">
            <Textarea
               name="content"
               value={message}
               onChange={handleChange}
               onKeyDown={handleKeyDown}
               placeholder={txt.chats.writeMsg}
            />
         </div>
         <Button className="message-bubble self">
            <img src={paperplaneIcon} alt={txt.icons.paperplane} />
         </Button>
      </form>
   );
}
