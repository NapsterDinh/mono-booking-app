import { apiPath } from '@customer-web/configs/env';
import { isServer } from '@customer-web/configs/server';

export class RouteMapper {
  public static getHost(
    hostSelect: keyof LCConfig.APIPath,
    type: 'public' | 'authc' | 'internal' | 'origin' = 'authc',
  ) {
    let host = '';

    if (isServer) {
      host = apiPath[hostSelect]?.INTERNAL;
    } else {
      host = apiPath[hostSelect]?.PATH;
    }

    if (type === 'public') {
      host += '/public';
    } else if (type === 'authc') {
      host += '/authc';
    } else if (type === 'internal') {
      host += '/internal';
    }

    return host;
  }
}
