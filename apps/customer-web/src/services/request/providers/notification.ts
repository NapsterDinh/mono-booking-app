import { HTTP_METHOD } from '@customer-web/enums/HTTP';
import { RouteMapper } from '@customer-web/services/routes/routes';
import {
  NotificationsPayload,
  ReadAllNotificationPayload,
  ReadNotificationPayload,
} from 'apps/nhapthuoc-estore/src/types/api/payload/notification';
import {
  NotificationsCountAllResponse,
  NotificationsCountResponse,
} from 'apps/nhapthuoc-estore/src/types/api/response/notification';
import APIClient from '../APIClient';
import { Notification } from 'apps/nhapthuoc-estore/src/types/models/notification';

export function getNotifications(payload: NotificationsPayload) {
  return APIClient<Notification>(
    `${RouteMapper.getHost('STORE_FRONT')}/notifications/filter`,
    HTTP_METHOD.POST,
    payload,
  );
}

export function count() {
  return APIClient<NotificationsCountResponse>(
    `${RouteMapper.getHost('STORE_FRONT')}/notifications/count`,
    HTTP_METHOD.POST,
  );
}

export function countAll() {
  return APIClient<NotificationsCountAllResponse>(
    `${RouteMapper.getHost('STORE_FRONT')}/notifications/count-all`,
    HTTP_METHOD.POST,
  );
}

export function read(payload: ReadNotificationPayload) {
  return APIClient(`${RouteMapper.getHost('STORE_FRONT')}/notifications/read`, HTTP_METHOD.PUT, payload);
}

export function readAll(payload: ReadAllNotificationPayload) {
  return APIClient(`${RouteMapper.getHost('STORE_FRONT')}/notifications/read-all`, HTTP_METHOD.PUT, payload);
}

export function subscribe(deviceCode: string) {
  return APIClient(`${RouteMapper.getHost('STORE_FRONT')}/notifications/${deviceCode}`, HTTP_METHOD.POST);
}

export function unsubcribe(deviceCode: string) {
  return APIClient(`${RouteMapper.getHost('STORE_FRONT')}/notifications/${deviceCode}`, HTTP_METHOD.DELETE);
}
