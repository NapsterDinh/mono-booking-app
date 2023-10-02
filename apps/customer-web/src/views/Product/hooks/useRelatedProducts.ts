import { UserRanking } from '@customer-web/enums/User';
import useRelatedProductsQuery from '@customer-web/hooks/queries/useRelatedProductsQuery';
import { getRestrictInfo } from '@customer-web/request-providers/product';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';

const useRelatedProducts = () => {
  const { query } = useRouter();
  const slug = query.slug as string[];
  const formattedSlug = useMemo(() => {
    const filteredSlug = slug.slice();
    filteredSlug.pop();

    return encodeURIComponent(filteredSlug.join('/'));
  }, [slug]);
  const { data } = useRelatedProductsQuery({
    category: [formattedSlug],
  });
  const [formattedProducts, setFormattedProducts] = useState<NhapThuocResponse.SearchService.ProductSearchDetail[]>();

  const formatProducts = async (products: NhapThuocResponse.SearchService.ProductSearchDetail[]) => {
    if (!products?.length) {
      setFormattedProducts([]);

      return;
    }

    let productRestrictList: NhapThuocResponse.Product.ProductRestrictInfo[] = [];

    try {
      productRestrictList = await getRestrictInfo({
        listDataVerified: products.map((item) => {
          return {
            itemCode: item.sku,
            unitCode: item.price.measureUnitCode,
          };
        }),
        rankId: UserRanking.BRONZE_LEVEL,
      });
    } catch (error) { }

    const formattedProducts = products.map((product) => ({
      ...product,
      restrictInfo: productRestrictList?.find(
        (prodRstrict) =>
          prodRstrict.itemCode === product.sku &&
          prodRstrict.unitCode.toString() === product.price?.measureUnitCode?.toString(),
      ),
    }));

    setFormattedProducts(formattedProducts);
  };

  useEffect(() => {
    formatProducts(data?.products);
  }, [data?.products]);

  return {
    products: formattedProducts,
  };
};

export default useRelatedProducts;
