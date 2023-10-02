import type { AxiosError, AxiosRequestConfig, AxiosResponse, Method, CancelToken as token } from 'axios';
import axios from 'axios';
import { globalConfig } from '../../configs/env';
import { OrderChannel } from '../../enums/Channel';
import { HTTP_METHOD, HTTP_STATUS } from '../../enums/HTTP';
import { clearAllToken, getRefreshToken, getToken, setAccessToken, setRefreshToken } from '../../helpers/LocalStorage';
import { RouteMapper } from '../routes/routes';

export type CancelToken = token;

const refreshAccessToken = async () => {
  const refreshToken = getRefreshToken();

  if (!refreshToken) {
    return;
  }

  try {
    const config = {
      method: HTTP_METHOD.POST,
      url: `${RouteMapper.getHost('STORE_FRONT', 'public')}/customer/refresh-token`,
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
      data: {
        refreshToken,
      },
    };
    const response = await axios(config);

    return response.data;
  } catch (error) {
    const data: any = error.response?.data;

    // Clear token
    if (data?.error === 'invalid_client') {
      clearAllToken();
    }

    return undefined;
  }
};

export const Authorization = (token: string) => {
  if (token) {
    return `Bearer ${token || ''}`;
  }
  return '';
};

// Initialize Request
const instanceAxios = axios.create({
  timeout: globalConfig?.timeout,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'content-type': 'application/json',
    Authorization: '',
    'order-channel': OrderChannel.WEB_NHAP_THUOC,
  },
});

// Request interceptor for API calls
instanceAxios.interceptors.request.use((config) => {
  // Set Authorization
  if (!config?.headers?.Authorization) {
    const accessToken = getToken();
    config!.headers!.Authorization = Authorization(accessToken);
  }

  return config;
});

// Response interceptor for API calls
instanceAxios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError) => {
    const { status, data, config } = error.response as any;

    if (
      (status === HTTP_STATUS.UN_AUTHORIZED &&
        data.error === HTTP_STATUS.UN_AUTHORIZED &&
        data.message === 'Invalid Token') ||
      (status === HTTP_STATUS.UN_AUTHORIZED && data?.errors?.error === 'invalid_token')
    ) {
      const rs = await refreshAccessToken();

      if (rs) {
        const { access_token, refresh_token } = rs;
        setAccessToken(access_token);
        setRefreshToken(refresh_token);
        config.headers.Authorization = Authorization(access_token);
        return await instanceAxios.request(config);
      }

      clearAllToken();
    }

    return Promise.reject(error);
  },
);

const APIClient = <T = NhapThuocResponse.Data, D = NhapThuocResponse.Error>(
  path: string,
  method: Method,
  data?: any,
  options?: AxiosRequestConfig,
) => {
  const reqData = method === HTTP_METHOD.GET ? { params: { ...data } } : { data };

  return new Promise<T>((resolve, reject) => {
    instanceAxios(path, {
      method,
      ...reqData,
      ...options,
    })
      .then((response: AxiosResponse<T, D>) => {
        const { data } = response;
        resolve(data);
      })
      .catch((error: AxiosError<T, D>) => {
        const { response } = error;
        if (axios.isCancel(error)) return;
        reject(response?.data);
      });
  });
};

export { instanceAxios };
export default APIClient;
