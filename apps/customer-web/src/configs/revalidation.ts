export const revalidation = {
  REVALIDATION_TIME: {
    LANDING: 60 * 30,
    LANDING_ERROR: 60,
    HOME: 60 * 10,
    HOME_ERROR: 5, // 5 seconds
    STATIC_PAGE: 60 * 60,
    HEALTH_ARTICLE: {
      SUCCESS: 60 * 30,
      NOT_FOUND: 15,
      ERROR: 60,
    },
  },
};
