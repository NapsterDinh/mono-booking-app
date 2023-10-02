import { HTTP_METHOD } from '@customer-web/enums/HTTP';
import { RouteMapper } from '@customer-web/services/routes/routes';
import APIClient from '../APIClient';
import { RcFile } from 'antd/lib/upload/interface';
import axios from 'axios';

interface TConfigUploadImg {
  file: string | RcFile | Blob;
  link: string;
  key?: string;
  onSuccess: any;
}

export function registerLink(fileName: string) {
  return APIClient<{ data: [{ preSignedUrl: string; key: string }] }>(
    `${RouteMapper.getHost('STORE_FRONT')}/s3/register-link-s3`,
    HTTP_METHOD.POST,
    {
      fileName,
    },
  );
}
export function uploadImg(config: TConfigUploadImg) {
  const { link, file, onSuccess, key } = config;
  return axios
    .put(link, file)
    .then(() => {
      onSuccess(key);
    })
    .catch((error) => {
      console.log(error);
    });
}
