import auth from 'reducers/auth';
import alerts from 'reducers/auth';
import navigation from 'reducers/navigation';
import layout from 'reducers/layout';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import users from 'reducers/users/usersReducers';

import messages from 'reducers/messages/messagesReducers';

import chat_rooms from 'reducers/chat_rooms/chat_roomsReducers';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    alerts,
    auth,
    navigation,

    users,

    messages,

    chat_rooms,
  });
