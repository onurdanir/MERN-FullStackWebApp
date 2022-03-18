import React, { useEffect } from 'react';
import MessagesWidget from 'pages/CRUD/Messages/page/MessagesWidget';
import actions from 'actions/messages/messagesFormActions';
import { connect } from 'react-redux';

const MessagesViewPage = (props) => {
  const { dispatch, match, loading, record } = props;

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [match]);

  return (
    <React.Fragment>
      <MessagesWidget loading={loading} record={record} />
    </React.Fragment>
  );
};

function mapStateToProps(store) {
  return {
    loading: store.users.form.loading,
    record: store.users.form.record,
  };
}

export default connect(mapStateToProps)(MessagesViewPage);
