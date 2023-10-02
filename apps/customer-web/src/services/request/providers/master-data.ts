import { HTTP_METHOD } from '@customer-web/enums/HTTP';
import { MasterDataType } from '@customer-web/enums/MasterData';
import { RouteMapper } from '@customer-web/services/routes/routes';
import APIClient from '../APIClient';

export function getGenders() {
  return APIClient<NhapThuocResponse.MasterData.Data>(
    `${RouteMapper.getHost('STORE_FRONT', 'public')}/customer/master/data`,
    HTTP_METHOD.GET,
    {
      TypeId: MasterDataType.GENDER,
    },
  );
}

export function getBusinessTypes() {
  return APIClient<NhapThuocResponse.MasterData.Data>(
    `${RouteMapper.getHost('STORE_FRONT', 'public')}/customer/master/data`,
    HTTP_METHOD.GET,
    {
      TypeId: MasterDataType.BUSINESS_TYPE,
    },
  );
}

export function getCities() {
  return APIClient<NhapThuocResponse.MasterData.Data>(
    `${RouteMapper.getHost('STORE_FRONT', 'public')}/customer/master/data`,
    HTTP_METHOD.GET,
    { TypeId: MasterDataType.CITY },
  );
}

export function getDistricts(cityId: string) {
  return APIClient<NhapThuocResponse.MasterData.Data>(
    `${RouteMapper.getHost('STORE_FRONT', 'public')}/customer/master/data`,
    HTTP_METHOD.GET,
    { TypeId: MasterDataType.DISTRICT, ParentSourceTypeId: MasterDataType.CITY, ParentId: cityId },
  );
}

export function getWards(districtId: string) {
  return APIClient<NhapThuocResponse.MasterData.Data>(
    `${RouteMapper.getHost('STORE_FRONT', 'public')}/customer/master/data`,
    HTTP_METHOD.GET,
    { TypeId: MasterDataType.WARD, ParentSourceTypeId: MasterDataType.DISTRICT, ParentId: districtId },
  );
}
