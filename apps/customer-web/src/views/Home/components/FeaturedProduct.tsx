import type { FeaturedProductSection } from '@customer-web/page-providers/HomeProviderService';
import type { AtomBoxProps } from '@tsu-org/ui';
import { AtomBox } from '@tsu-org/ui';
import { Box, Image, Row, Text } from '@tsu-org/ui-kit';
import { Row as AntdRow, Col } from 'antd';
import type { FC } from 'react';
import ProductCard from './ProductCard';

const FeaturedProduct: FC<
  AtomBoxProps & {
    section?: FeaturedProductSection;
  }
> = ({ section, ...rest }) => {
  return (
    <AtomBox
      p={['3', null, null, '0']}
      {...rest}
    >
      <Row mb="3">
        <Box mr="0.5rem">
          <Image
            alt={section?.webTitleBackground?.alt}
            src={section?.webTitleBackground?.url}
          />
        </Box>
        <Text
          fontSize="18px"
          bold
        >
          {section?.title}
        </Text>
        {/* <Box
          width="1.5px"
          backgroundColor="#C1C8D1"
          mx="0.75rem"
          height="1rem"
        />
        <Link
          href="/"
          fontWeight="500"
          small
        >
          Xem tất cả <RightOutlinedIcon ml="0.75rem" />
        </Link> */}
      </Row>
      <AntdRow gutter={[16, 16]}>
        {section?.products?.map((product) => (
          <Col
            key={product.sku}
            lg={{ span: 6 }}
            xl={{ span: 4 }}
            span={12}
          >
            <ProductCard product={product} />
          </Col>
        ))}
      </AntdRow>
    </AtomBox>
  );
};

export default FeaturedProduct;
