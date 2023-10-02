import useReadAllNotificationMutation from '@customer-web/hooks/mutations/useReadAllNotificationMutation';
import useReadNotificationMutation from '@customer-web/hooks/mutations/useReadNotificationMutation';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppState, useAppDispatch } from '..';
import { NotificationsPayload } from '../../types/api/payload/notification';
import { ReadAllNotificationPayload, ReadNotificationPayload } from '../../types/models/notification';
import {
  countAllNotification,
  countNotificationByTemplateId,
  getListNotification,
  readAllNotification as readAllNotificationAction,
  readNotification as readNotificationAction,
} from './actions';

export function useListNotifications(payload: NotificationsPayload) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getListNotification(payload));
  }, [dispatch, payload]);

  return useSelector<AppState, AppState['notification']['notifications']>((state) => state.notification.notifications);
}

export function useLoadingNotifications() {
  return useSelector<AppState, AppState['notification']['loading']>((state) => state.notification.loading);
}

export function useReadNotification() {
  const dispatch = useAppDispatch();

  const [payload, setPayload] = useState<ReadNotificationPayload>();

  const { mutateAsync: readNotification } = useReadNotificationMutation({
    onSuccess: () => {
      dispatch(readNotificationAction(payload));
      dispatch(countNotificationByTemplateId());
    },
  });

  const handleReadNotification = async (params: ReadNotificationPayload) => {
    if (!params?.id) return;
    setPayload(params);

    await readNotification({
      ids: [params?.id],
      templateId: params?.tabCode,
    });
  };

  return {
    handleReadNotification,
  };
}
export function useReadAllNotification() {
  const dispatch = useAppDispatch();

  const { mutateAsync: readAllNotification } = useReadAllNotificationMutation({
    onSuccess: () => {
      setTimeout(() => {
        dispatch(countNotificationByTemplateId());
      }, 3000);
    },
  });

  const handleReadAllNotification = async (params: ReadAllNotificationPayload) => {
    const payload = {
      templateId: params?.tabCode,
    };
    dispatch(readAllNotificationAction(payload));

    await readAllNotification(payload);
  };

  return {
    handleReadAllNotification,
  };
}

export function useCountAllNotification() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(countAllNotification());
  }, [dispatch]);

  return useSelector<AppState, AppState['notification']['countNotification']>(
    (state) => state.notification.countNotification,
  );
}

export function useCountEachTemplateNotification() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(countNotificationByTemplateId());
  }, [dispatch]);

  const countNotificationByTemplate = useSelector<AppState, AppState['notification']['countNotificationByTemplate']>(
    (state) => state.notification.countNotificationByTemplate,
  );
  const loadingCountAll = useSelector<AppState, AppState['notification']['loadingCountAllNotification']>(
    (state) => state.notification.loadingCountAllNotification,
  );

  return {
    countNotificationByTemplate,
    loadingCountAll,
  };
}
