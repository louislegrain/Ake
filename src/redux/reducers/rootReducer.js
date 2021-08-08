import { combineReducers } from 'redux';
import { convsReducer } from './convsReducer';
import { chatsReducer } from './chatsReducer';

export const rootReducer = combineReducers({ convs: convsReducer, chats: chatsReducer });
