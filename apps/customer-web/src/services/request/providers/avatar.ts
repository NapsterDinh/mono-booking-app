import { HTTP_METHOD } from '@customer-web/enums/HTTP';
import { RouteMapper } from '@customer-web/services/routes/routes';
import APIClient from '../APIClient';

export const uploadAvatarToCloud = async (payload: FormData) => {
  return new Promise((resolve, reject) => {
    APIClient(`${RouteMapper.getHost('STORE_FRONT')}/profile/information/avatar/upload`, HTTP_METHOD.POST, payload, {
      headers: {
        Accept: 'multipart/form-data',
      },
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error.response);
      });
  });
};

export function insertAvatarIntoCustomerData(data: NhapThuocPayload.Avatars.InsertAvatar): Promise<any> {
  return new Promise((resolve, reject) => {
    APIClient(`${RouteMapper.getHost('STORE_FRONT')}/profile/information/avatar`, HTTP_METHOD.PATCH, data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error.response);
      });
  });
}

// update avatar
export function updateAvatarIntoCustomerData(data: NhapThuocPayload.Avatars.UpdateAvatar): Promise<any> {
  return new Promise((resolve, reject) => {
    APIClient(`${RouteMapper.getHost('STORE_FRONT')}/profile/information/avatar`, HTTP_METHOD.PUT, data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error.response);
      });
  });
}
