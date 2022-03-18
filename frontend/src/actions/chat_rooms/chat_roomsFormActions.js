import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { toast } from 'react-toastify';

const actions = {
  doNew: () => {
    return {
      type: 'CHAT_ROOMS_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'CHAT_ROOMS_FORM_FIND_STARTED',
      });

      axios.get(`/chat_rooms/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'CHAT_ROOMS_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'CHAT_ROOMS_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/chat_rooms'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'CHAT_ROOMS_FORM_CREATE_STARTED',
      });

      axios.post('/chat_rooms', { data: values }).then((res) => {
        dispatch({
          type: 'CHAT_ROOMS_FORM_CREATE_SUCCESS',
        });

        toast.success('Chat_rooms created');
        dispatch(push('/admin/chat_rooms'));
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'CHAT_ROOMS_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'CHAT_ROOMS_FORM_UPDATE_STARTED',
      });

      await axios.put(`/chat_rooms/${id}`, { id, data: values });

      dispatch(doInit());

      dispatch({
        type: 'CHAT_ROOMS_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        toast.success('Profile updated');
      } else {
        toast.success('Chat_rooms updated');
        dispatch(push('/admin/chat_rooms'));
      }
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'CHAT_ROOMS_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
