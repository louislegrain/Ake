const initialState = {};

export function convsReducer(state = initialState, action) {
   switch (action.type) {
      case 'add_conv':
         return { ...state, [action.payload.id]: action.payload.state };
      case 'new_msg':
         let newObj = { ...state };
         newObj[action.payload.id] = [...newObj[action.payload.id], action.payload.state];
         return newObj;
      default:
         return state;
   }
}
