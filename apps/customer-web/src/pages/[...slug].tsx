import { DEFAULT_PRODUCT_IMAGE } from '@customer-web/constants';
import { isProductPage } from '@customer-web/helpers/Utils';
import { getCategoryBySlug, getFilters } from '@customer-web/request-providers/category';
import { getProductBySlug } from '@customer-web/request-providers/search';
import { useAppDispatch } from '@customer-web/state';
import { addRecentlyWatchedSku } from '@customer-web/state/cache/actions';
import Category from '@customer-web/views/Category';
import { getBreadcrumbItems } from '@customer-web/views/Category/helpers';
import type { CategoryProps } from '@customer-web/views/Category/types';
import Product from '@customer-web/views/Product';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import type { FC } from 'react';
import { useEffect } from 'react';

export async function getServerSideProps(context: any) {
  const slug = context.params.slug as string[];
  const slugString = slug.join('/');
  const queryClient = new QueryClient();
  const props: any = {};

  if (isProductPage(slug)) {
    props.product = await getProductBySlug(encodeURIComponent(slugString));
    const productName = props.product?.webName || props.product?.name;
    props.pageTitle = `nhapthuoc.com${props.product?.headingText ? ` - ${props.product.headingText}` : ''}`;
    props.pageDescription = props.pageTitle;
    props.openGraph = {
      title: `nhapthuoc.com${productName ? ` - ${productName}` : ''}`,
      description: `nhapthuoc.com${productName ? ` - ${productName}` : ''}`,
      images: [
        {
          url: props.product?.primaryImage || DEFAULT_PRODUCT_IMAGE,
          alt: `nhapthuoc.com${productName ? ` - ${productName}` : ''}`,
          type: 'image/jpeg',
        },
      ],
    };
  } else {
    const [category] = await Promise.all([
      getCategoryBySlug(slugString),
      queryClient.prefetchQuery(['filters', slugString], () => getFilters(slugString)),
    ]);
    props.category = category?.data;
    props.breadcrumbItems = getBreadcrumbItems(category?.data);
    const title = `nhapthuoc.com${props?.category?.name ? ` - ${props?.category?.name}` : ''}`;
    props.pageTitle = title;
    props.pageDescription = props.pageTitle;
    props.openGraph = {
      title,
      description: title,
      images: [
        {
          url: 'https://prod-nhapthuoc-cms.s3-sgn09.fptcloud.com/logo_5f2e46d2e5_8d7172de84_f3b689eb64.svg',
          alt: title,
          type: 'image/jpeg',
        },
      ],
    };
  }

  return {
    props: {
      isProductPage: isProductPage(slug),
      dehydratedState: dehydrate(queryClient),
      ...props,
    },
  };
}

const SlugPage = (props: any) => {
  return props.isProductPage ? <ProductPage {...props} /> : <CategoryPage {...props} />;
};

const ProductPage: FC<{ product?: NhapThuocResponse.SearchService.ProductSearchDetail }> = ({ product }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (product?.sku) {
      dispatch(addRecentlyWatchedSku(product.sku));
    }
  }, [dispatch, product?.sku]);

  return (
    <>
      <Product />
    </>
  );
};

const CategoryPage: FC<CategoryProps> = (props) => {
  return (
    <>
      <Category {...props} />
    </>
  );
};

export default SlugPage;
