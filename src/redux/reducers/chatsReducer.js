const initialState = [];

export function chatsReducer(state = initialState, action) {
   const { type, payload } = action;
   let newArr = [...state];
   const i = newArr.findIndex(chat => chat.id === payload.id);
   switch (type) {
      case 'set_chats':
         return payload;
      case 'replace_chat':
         newArr[i] = { ...newArr[i], ...payload.state };
         return newArr;
      case 'new_msg':
         const { content, created_at, author } = payload.state;
         newArr[i] = {
            ...newArr[i],
            last_msg_content: content,
            updated_at: created_at,
            last_msg_author: author,
            last_msg_read: false,
         };
         newArr.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
         return newArr;
      default:
         return state;
   }
}
