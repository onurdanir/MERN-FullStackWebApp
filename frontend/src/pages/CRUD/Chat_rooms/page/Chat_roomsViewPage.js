import React, { useEffect } from 'react';
import Chat_roomsWidget from 'pages/CRUD/Chat_rooms/page/Chat_roomsWidget';
import actions from 'actions/chat_rooms/chat_roomsFormActions';
import { connect } from 'react-redux';

const Chat_roomsViewPage = (props) => {
  const { dispatch, match, loading, record } = props;

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [match]);

  return (
    <React.Fragment>
      <Chat_roomsWidget loading={loading} record={record} />
    </React.Fragment>
  );
};

function mapStateToProps(store) {
  return {
    loading: store.users.form.loading,
    record: store.users.form.record,
  };
}

export default connect(mapStateToProps)(Chat_roomsViewPage);
