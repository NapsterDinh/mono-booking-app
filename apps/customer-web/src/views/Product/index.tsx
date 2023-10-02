import { useLoading, usePollProduct, useProduct, useProductContent } from '@customer-web/state/product/hooks';
import { AtomBox, breakpoints } from '@tsu-org/ui';
import { Box, Breadcrumb, Flex, Text } from '@tsu-org/ui-kit';
import DetailInfo from './components/DetailInfo';
import GeneralInfo from './components/GeneralInfo';
import Loading from './components/Loading';
import RelatedProducts from './components/RelatedProducts';
import useBreadcrumbItems from './hooks/useBreadcrumbItems';

const Product = () => {
  const product = useProduct();
  const productContent = useProductContent();
  const loading = useLoading();
  const breadcrumbItems = useBreadcrumbItems(product);

  usePollProduct();

  if (loading) {
    return <Loading />;
  }

  if (!product) {
    return (
      <Flex
        flexGrow="1"
        alignItems="center"
        justifyContent="center"
        minHeight="300px"
      >
        <Text>Không tìm thấy thông tin sản phẩm</Text>
      </Flex>
    );
  }

  return (
    <Box
      p={{
        _: '1rem 0rem',
      }}
    >
      <AtomBox
        mb="1p5rem"
        mx="2"
      >
        <Breadcrumb items={breadcrumbItems} />
      </AtomBox>
      <GeneralInfo
        product={product}
        mb="3"
      />
      <DetailInfo
        mb="4"
        product={product}
        isFetching={loading}
        productContent={productContent}
      />
      <RelatedProducts
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
  );
};

export default Product;
