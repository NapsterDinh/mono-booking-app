import Link from 'next/link';
import { useMemo } from 'react';

const useBreadcrumbItems = (product?: NhapThuocResponse.SearchService.ProductSearchDetail) => {
  const breadcrumbItems = useMemo(() => {
    const items: { title: JSX.Element | string }[] = [
      {
        title: (
          <Link
            key="/"
            href="/"
          >
            Trang chủ
          </Link>
        ),
      },
    ];

    if (product?.categories?.length) {
      items.push(
        ...product.categories.map((category) => ({
          title: (
            <Link
              key={category.slug}
              href={`/${category.slug}` || '/'}
            >
              {category.name}
            </Link>
          ),
        })),
      );
    }

    items.push({
      title: product?.headingText || product?.webName || product?.name || '',
    });

    return items;
  }, [product?.categories, product?.headingText, product?.webName, product?.name]);

  return breadcrumbItems;
};

export default useBreadcrumbItems;
