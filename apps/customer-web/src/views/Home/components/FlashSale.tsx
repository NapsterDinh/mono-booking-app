import type { FlashSaleProductSection } from '@customer-web/page-providers/HomeProviderService';
import { Box, BoxProps, Image } from '@tsu-org/ui-kit';
import { Col, Row } from 'antd';
import dynamic from 'next/dynamic';
import type { FC } from 'react';
import ProductCard from './ProductCard';

interface FlashSaleProps extends BoxProps {
  section: FlashSaleProductSection;
}

const Countdown = dynamic(() => import('./Countdown'), {
  ssr: false,
});

const FlashSale: FC<FlashSaleProps> = ({ section, ...rest }) => {
  return (
    <Box
      background={section?.backgroundColor || 'gradientOrangeLight'}
      borderRadius={{
        lg: 'default',
        _: 0,
      }}
      p="0.75rem"
      position="relative"
      {...rest}
    >
      <Box
        display="flex"
        position="absolute"
        left="0.75rem"
        top="-2.375rem"
      >
        <Image
          hasFallback={false}
          src={section?.webTitleBackground?.url}
          alt={section?.webTitleBackground?.alt}
        />
        <Countdown endDate={section?.endDate} />
      </Box>

      <Row gutter={[16, 16]}>
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
      </Row>
    </Box>
  );
};

export default FlashSale;
