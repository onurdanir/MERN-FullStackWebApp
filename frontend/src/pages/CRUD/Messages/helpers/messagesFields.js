const messagesFields = {
  id: { type: 'id', label: 'ID' },

  text: { type: 'string', label: 'Text' },

  from_user: { type: 'relation_one', label: 'From User' },

  chat_room: { type: 'relation_one', label: 'Chat Room' },

  to_user: { type: 'relation_one', label: 'To User' },
};

export default messagesFields;
