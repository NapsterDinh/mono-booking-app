export const pagination = ({
  currentPage,
  maxResultCount,
  totalItems,
}: {
  currentPage: number;
  maxResultCount: number;
  totalItems: number;
  goToPage?: number;
}) => {
  const totalPages = Math.round(totalItems / maxResultCount);
  /**
   * Go to specify page
   * @param page
   * @returns
   */
  function goTo(page: number) {
    return {
      totalPages,
      currentPage: currentPage,
      skipCount: (page - 1) * maxResultCount,
    };
  }

  function next() {
    return {
      totalPages,
      currentPage: (currentPage += 1),
    };
  }
  function prev() {
    return {
      totalPages,
      currentPage: (currentPage -= 1),
    };
  }
  return {
    currentPage,
    totalPages,
    goTo,
    next,
    prev,
  };
};
