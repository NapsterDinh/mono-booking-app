export const tryGenSession = async (maxRetry = 5, genSessionAction) => {
  let retry = 0;

  const fetch = async () => {
    retry++;

    try {
      await genSessionAction();
    } catch (error) {
      if (retry < maxRetry) {
        fetch();
      }
    }
  };

  fetch();
};
