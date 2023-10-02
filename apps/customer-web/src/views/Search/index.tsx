import { LoadingOutlined } from '@ant-design/icons';
import RecentlyWatchedProducts from '@customer-web/components/RecentlyWatchedProducts';
import { SearchType } from '@customer-web/enums/Search';
import { getSearchDetail } from '@customer-web/request-providers/search';
import { AtomBox, breakpoints } from '@tsu-org/ui';
import { Box, Flex, Text } from '@tsu-org/ui-kit';
import { Spin } from 'antd';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import Empty from './components/Empty';
import Posts from './components/Posts';
import Products from './components/Products';
import { useSearch } from './hooks/useSearch';
import { useSearchPosts } from './hooks/useSearchPosts';
import { useSearchProducts } from './hooks/useSearchProducts';

const LoadingFRT = dynamic(() => import('@customer-web/components/Common/Pages/LoadingFRT'), {
  ssr: false,
});

const defaultCategorySortAttributes = [
  {
    id: 1,
    code: 'category',
    webName: 'Loại sản phẩm',
  },
  {
    id: 2,
    code: 'objectUse',
    webName: 'Đối tượng',
  },
];

const Search = () => {
  const router = useRouter();
  const { query } = router;
  const keyword = query.s as string;
  const { searchParams } = useSearch();
  const searchPostsData = useSearchPosts({
    keyword,
  });
  const searchProductsData = useSearchProducts({
    keyword,
    categorySortAttributes: defaultCategorySortAttributes,
    categories: [],
    getProductsFn: getSearchDetail,
  });
  const isLoading = searchPostsData.isLoading || searchProductsData.isLoading;
  const totalResult = useMemo(() => {
    if (searchParams.type === SearchType.POST) {
      return searchPostsData.totalCount;
    }

    if (searchParams.type === SearchType.PRODUCT) {
      return searchProductsData.totalCount;
    }

    return (searchPostsData.totalCount ?? 0) + (searchProductsData.totalCount ?? 0);
  }, [searchPostsData.totalCount, searchProductsData.totalCount, searchParams.type]);
  const isEmpty = useMemo(() => {
    if (searchParams.type === SearchType.POST) {
      return (searchPostsData.totalCount ?? 0) <= 0;
    }

    if (searchParams.type === SearchType.PRODUCT) {
      return (searchProductsData.totalCount ?? 0) <= 0;
    }

    return (searchPostsData.totalCount ?? 0) + (searchProductsData.totalCount ?? 0) <= 0;
  }, [searchPostsData.totalCount, searchProductsData.totalCount, searchParams.type]);

  if (isLoading && !searchPostsData.totalCount && !searchProductsData.totalCount) {
    return (
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        flexGrow="1"
        minHeight="300px"
      >
        <Spin indicator={<LoadingOutlined />} />
      </Flex>
    );
  }

  return (
    <AtomBox>
      <AtomBox py="3">
        <AtomBox
          bgc="white"
          p="3"
          borderRadius="12px"
        >
          <Text>
            Tìm thấy <b>{totalResult}</b> kết quả với từ khoá <b>{keyword}</b>
          </Text>
        </AtomBox>
      </AtomBox>

      {isEmpty ? (
        <Empty
          keyword={keyword}
          mb="4"
        />
      ) : (
        <AtomBox mb="3">
          {(searchParams.type === SearchType.ALL || searchParams.type === SearchType.PRODUCT) &&
            searchProductsData.totalCount > 0 && (
              <Products
                categorySortAttributes={defaultCategorySortAttributes}
                searchProductsData={searchProductsData}
              />
            )}

          {(searchParams.type === SearchType.ALL || searchParams.type === SearchType.POST) &&
            searchPostsData.totalCount > 0 && (
              <Box>
                <Posts
                  mb="3"
                  totalCount={searchPostsData.totalCount}
                  posts={searchPostsData.posts}
                  hasMore={searchPostsData.hasMore}
                  onViewMore={searchPostsData.onViewMore}
                />
              </Box>
            )}

          <Box p="1rem">
            <RecentlyWatchedProducts
              slidesPerView={2}
              spaceBetween={12}
              breakpoints={{
                [breakpoints.xs]: {
                  slidesPerView: 2,
                  spaceBetween: 12,
                },
                [breakpoints.md]: {
                  slidesPerView: 4,
                  spaceBetween: 16,
                },
                [breakpoints.xl]: {
                  slidesPerView: 6,
                  spaceBetween: 16,
                },
              }}
            />
          </Box>
        </AtomBox>
      )}

      {isLoading && <LoadingFRT />}
    </AtomBox>
  );
};

export default Search;
