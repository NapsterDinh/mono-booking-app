import { useProductBySlugQuery } from '@customer-web/hooks/queries';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

const useProductBySlug = () => {
  const { query } = useRouter();
  const slug = query.slug as string[];
  const formattedSlug = useMemo(() => {
    return encodeURIComponent(slug.join('/'));
  }, [slug]);
  const { data, isFetching: isFetchingProduct } = useProductBySlugQuery(formattedSlug, {
    staleTime: 60 * 5 * 1000, // 5 minutes
  });
  const isFetching = isFetchingProduct;

  return {
    product: data,
    isFetching,
  };
};

export default useProductBySlug;
