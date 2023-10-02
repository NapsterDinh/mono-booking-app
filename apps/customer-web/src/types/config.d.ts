declare namespace LCConfig {
  interface APIPath {
    FRONT_DOOR_V1: APIPathItem; // front-door v1
    FRONT_DOOR: APIPathItem; // front-door v2
    STORE_FRONT: APIPathItem;
    SSO: APIPathItem;
    CUSTOMER_API: APIPathItem;
    API_CMS: APIPathItem;
    IMAGE_CDN_URL: APIPathItem;
    SEARCH_SERVICE: APIPathItem;
    ESTORE: APIPathItem;
  }

  interface APIPathItem {
    PATH: string | undefined;
    INTERNAL: string | undefined;
  }

  interface GlobalConfig {
    [key: string]: any;
  }
}
