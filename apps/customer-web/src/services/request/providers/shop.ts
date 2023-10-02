import { RouteMapper } from '@customer-web/services/routes/routes';
import { HTTP_METHOD } from '../../../enums/HTTP';
import APIClient from '../APIClient';

export function countShop() {
  return APIClient<number>(`${RouteMapper.getHost('STORE_FRONT')}/shop/ecom/counting-shops`, HTTP_METHOD.POST);
}
