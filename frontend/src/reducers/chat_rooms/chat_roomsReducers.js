import list from 'reducers/chat_rooms/chat_roomsListReducers';
import form from 'reducers/chat_rooms/chat_roomsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
