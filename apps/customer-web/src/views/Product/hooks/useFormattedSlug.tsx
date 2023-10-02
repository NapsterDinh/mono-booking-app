import { useRouter } from 'next/router';
import { useMemo } from 'react';

const useFormattedSlug = () => {
  const { query } = useRouter();
  const slug = query.slug as string[];
  const formattedSlug = useMemo(() => {
    return encodeURIComponent(slug.join('/'));
  }, [slug]);

  return formattedSlug;
};

export default useFormattedSlug;
