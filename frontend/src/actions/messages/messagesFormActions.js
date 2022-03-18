import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { toast } from 'react-toastify';

const actions = {
  doNew: () => {
    return {
      type: 'MESSAGES_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'MESSAGES_FORM_FIND_STARTED',
      });

      axios.get(`/messages/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'MESSAGES_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'MESSAGES_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/messages'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'MESSAGES_FORM_CREATE_STARTED',
      });

      axios.post('/messages', { data: values }).then((res) => {
        dispatch({
          type: 'MESSAGES_FORM_CREATE_SUCCESS',
        });

        toast.success('Messages created');
        dispatch(push('/admin/messages'));
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'MESSAGES_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'MESSAGES_FORM_UPDATE_STARTED',
      });

      await axios.put(`/messages/${id}`, { id, data: values });

      dispatch(doInit());

      dispatch({
        type: 'MESSAGES_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        toast.success('Profile updated');
      } else {
        toast.success('Messages updated');
        dispatch(push('/admin/messages'));
      }
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'MESSAGES_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
