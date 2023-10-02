import { createListenerMiddleware } from '@reduxjs/toolkit';
import { notification } from 'antd';
import { addItem, adjustItem } from './cart/actions';

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: addItem.rejected,
  effect: async (action) => {
    if (action?.error?.message) {
      notification.error({
        message: action?.error?.message,
      });
    }
  },
});

listenerMiddleware.startListening({
  actionCreator: adjustItem.rejected,
  effect: async (action) => {
    if (action?.error?.message) {
      notification.error({
        message: action?.error?.message,
      });
    }
  },
});

export { listenerMiddleware };
