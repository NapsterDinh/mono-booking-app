import { getListCategory } from '@customer-web/request-providers/search';
import { useEffect, useState } from 'react';

const useSubCatesProductCountMap = (categoryCurrent?: NhapThuocResponse.Categories.CategoryChildren) => {
  const [subCatesProductCountMap, setSubCatesProductCountMap] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(false);

  const getSubCatesProductCountMap = async (categoryCurrent: NhapThuocResponse.Categories.CategoryChildren) => {
    if (loading) {
      return;
    }

    setLoading(true);

    try {
      const subCateSlugs = categoryCurrent?.children.map((subCate) => subCate.fullPathSlug).filter(Boolean);

      const productCountOfSubCates = await getListCategory(subCateSlugs);

      const subCatesProductCountMap = productCountOfSubCates.reduce<Record<string, number>>((countMap, subCate) => {
        countMap[subCate.fullPathSlug] = subCate.countProduct;
        return countMap;
      }, {});

      setSubCatesProductCountMap(subCatesProductCountMap);
    } catch (error) { }

    setLoading(false);
  };

  useEffect(() => {
    if (categoryCurrent?.children && categoryCurrent?.children.length > 0) {
      getSubCatesProductCountMap(categoryCurrent);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryCurrent]);

  return subCatesProductCountMap;
};

export default useSubCatesProductCountMap;
