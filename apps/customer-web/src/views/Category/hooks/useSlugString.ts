import { useRouter } from 'next/router';
import { useMemo } from 'react';

const useSlugString = () => {
  const { query } = useRouter();
  const slug = query.slug as string[];
  const formattedSlug = useMemo(() => {
    return slug.join('/');
  }, [slug]);

  return formattedSlug;
};

export default useSlugString;
