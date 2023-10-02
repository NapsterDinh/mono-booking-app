import { HTTP_METHOD } from '@customer-web/enums/HTTP';
import { RouteMapper } from '@customer-web/services/routes/routes';
import APIClient from '../APIClient';

export const getComments = async (
  payload: NhapThuocPayload.Comments.GetList,
): Promise<NhapThuocResponse.Comments.List> => {
  return new Promise((resolve) => {
    return APIClient<NhapThuocResponse.Comments.List>(
      `${RouteMapper.getHost('FRONT_DOOR_V1')}/comment`,
      HTTP_METHOD.GET,
      payload,
    )
      .then((res) => {
        resolve(res);
      })
      .catch(() => {
        const errorHandler: NhapThuocResponse.Comments.List = {
          totalItems: 0,
          totalPage: 0,
          data: [],
        };
        resolve(errorHandler);
      });
  });
};

export const sendComment = async (payload: NhapThuocPayload.Comments.Comment) => {
  return APIClient<NhapThuocResponse.Global.FrontDoorReturnStruct<NhapThuocResponse.Comments.Data>>(
    `${RouteMapper.getHost('FRONT_DOOR_V1')}/comment`,
    HTTP_METHOD.POST,
    payload,
  );
};

export const sendLike = async (parentId: string | number) => {
  return APIClient<NhapThuocResponse.Global.FrontDoorReturnStruct<NhapThuocResponse.Comments.Data>>(
    `${RouteMapper.getHost('FRONT_DOOR_V1')}/comment/like/${parentId}`,
    HTTP_METHOD.GET,
  );
};
