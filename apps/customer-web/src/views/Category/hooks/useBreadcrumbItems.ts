import { useMemo } from 'react';
import { getBreadcrumbItems } from '../helpers';

const useBreadcrumbItems = (categoryCurrent: NhapThuocResponse.Categories.CategoryChildren) => {
  const breadcrumbItems = useMemo(() => {
    return getBreadcrumbItems(categoryCurrent);
  }, [categoryCurrent]);

  return breadcrumbItems;
};

export default useBreadcrumbItems;
