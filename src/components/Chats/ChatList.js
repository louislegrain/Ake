import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Message } from './';
import { usePrettyDate, useServerReq } from '../../functions/hooks';
import { sameDay } from '../../functions/sameDay';
import { socketContext } from '../../contexts/sockets/socket';

import '../../styles/Chats/ChatList.css';

export function ChatList() {
   const [msgDayOpacity, setMsgDayOpacity] = useState(0);
   const [curConv, setCurConv] = useState([]);
   const [timeoutId, setTimeoutId] = useState();
   const prettyDate = usePrettyDate();
   const serverReq = useServerReq();
   const chatsContainer = useRef();
   const id = useParams().id * 1;
   const conv = useSelector(state => state.convs[id]);
   const dispatch = useDispatch();
   const { socket } = useContext(socketContext);

   const scrollDown = () =>
      chatsContainer.current &&
      (chatsContainer.current.scrollTop = chatsContainer.current.scrollHeight);

   const chatsContainerScroll = () => {
      clearTimeout(timeoutId);
      setMsgDayOpacity(1);
      setTimeoutId(setTimeout(() => setMsgDayOpacity(0), 2000));
   };

   useEffect(() => () => clearTimeout(timeoutId), [timeoutId]);

   useEffect(() => {
      scrollDown();
      chatsContainerScroll();
      // eslint-disable-next-line
   }, [conv, id]);

   useEffect(() => {
      if (conv || !id) return;

      const controller = new AbortController();
      (async () => {
         const data = await serverReq(`/message/get?conv_id=${id}&offset=0`, {
            signal: controller.signal,
         });
         if (data.ok)
            dispatch({
               type: 'add_conv',
               payload: {
                  id,
                  state: data.data.data.sort(
                     (a, b) => new Date(a.created_at) - new Date(b.created_at)
                  ),
               },
            });
      })();

      return () => controller.abort();
   }, [id, conv, dispatch, serverReq]);

   useEffect(() => {
      socket?.on('message', payload => {
         dispatch({
            type: 'new_msg',
            payload: {
               id,
               state: {
                  author: payload.from,
                  content: payload.content,
                  created_at: payload.date,
                  id: new Date().getTime(),
               },
            },
         });
      });
   }, [socket]);

   useMemo(() => {
      if (!conv) return;

      let i = -1;
      let arr = [];
      let lastDate = null;

      conv.forEach(msg => {
         const date = new Date(msg.created_at);
         if (!lastDate || !sameDay(lastDate, date)) {
            i += 1;
            arr[i] = [];
         }
         arr[i].push(msg);
         lastDate = date;
      });
      setCurConv(arr);
   }, [conv]);

   return (
      <div className="chats-list" ref={chatsContainer} onScroll={chatsContainerScroll}>
         {curConv.map((day, i) => (
            <div key={i}>
               <div className="msg-day message-bubble" style={{ opacity: msgDayOpacity }}>
                  {prettyDate(new Date(day[0].created_at))}
               </div>
               {day.map((msg, k) => (
                  <Message key={msg.id} msg={msg} nextMsg={day[k + 1]} />
               ))}
            </div>
         ))}
      </div>
   );
}
