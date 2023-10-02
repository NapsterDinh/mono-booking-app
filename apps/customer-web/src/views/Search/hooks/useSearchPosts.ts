import { getPosts } from '@customer-web/request-providers/search';
import { useDeepCompareEffect, useUpdateEffect } from 'ahooks';
import { useCallback, useEffect, useState } from 'react';

const MAX_PER_FETCH = 5;

export const useSearchPosts = (initialParams: NhapThuocPayload.SearchService.Post) => {
  const [params, setParams] = useState<NhapThuocPayload.SearchService.Post>({
    ...initialParams,
    skipCount: 0,
    maxResultCount: MAX_PER_FETCH,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [posts, setPosts] = useState<NhapThuocResponse.SearchService.PostItem[]>([]);
  const [error, setError] = useState<boolean>(false);

  const hasMore = totalCount > posts?.length || false;

  const fetchPosts = useCallback(async (params: NhapThuocPayload.SearchService.Post) => {
    setIsLoading(true);

    try {
      // const postResponse = await getPosts(params);
      const postResponse = {
        totalCount: 0,
        items: [],
      };

      if (params.skipCount) {
        setPosts((prev) => prev.concat(postResponse.items));
      } else {
        setPosts(postResponse.items);
      }

      setTotalCount(postResponse.totalCount);
    } catch {
      setError(true);
    }
    setIsLoading(false);
  }, []);

  const onViewMore = () => {
    setParams((prev) => ({
      ...prev,
      skipCount: (prev.skipCount ?? 0) + MAX_PER_FETCH,
    }));
  };

  useEffect(() => {
    fetchPosts(params);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  useDeepCompareEffect(() => {
    setParams((prev) => ({
      ...prev,
      ...initialParams,
    }));
  }, [initialParams]);

  return {
    totalCount,
    posts,
    hasMore,
    isLoading,
    error,
    fetchPosts,
    onViewMore,
  };
};
