import RecentlyWatchedProducts from '@customer-web/components/RecentlyWatchedProducts';
import { AtomBox, breakpoints } from '@tsu-org/ui';
import { Box, Breadcrumb } from '@tsu-org/ui-kit';
import { Col, Row } from 'antd';
import Link from 'next/link';
import type { FC } from 'react';
import CartItemsSelector from './CartItemsSelector';
import OrderSummary from './OrderSummary';
import PromotionByOrder from './PromotionByOrder';

interface OriginProps {
  onNext?: () => void;
}

const Origin: FC<OriginProps> = ({ onNext }) => {
  return (
    <>
      <Box
        p={{
          _: '0 0 1rem',
          lg: '1rem',
          xl: '1rem 0rem',
        }}
      >
        <AtomBox
          mb={['2', null, null, '3']}
          mt={['2', null, null, '0']}
          ml={['3', null, null, '0']}
        >
          <Breadcrumb
            items={[
              {
                title: <Link href="/">Trang chủ</Link>,
              },
              {
                title: 'Giỏ hàng',
              },
            ]}
          />
        </AtomBox>
        <Row gutter={[32, 32]}>
          <Col
            lg={{ span: 16 }}
            span={24}
          >
            <CartItemsSelector mb="4" />

            <PromotionByOrder />

            <AtomBox
              px={{
                xs: '3',
                lg: '0',
              }}
            >
              <RecentlyWatchedProducts
                slidesPerView={2}
                spaceBetween={12}
                breakpoints={{
                  [breakpoints.xs]: {
                    slidesPerView: 2,
                    spaceBetween: 12,
                  },
                  [breakpoints.sm]: {
                    slidesPerView: 4,
                    spaceBetween: 12,
                  },
                  [breakpoints.lg]: {
                    slidesPerView: 4,
                    spaceBetween: 16,
                  },
                }}
              />
            </AtomBox>
          </Col>
          <Col
            lg={{ span: 8 }}
            span={24}
          >
            <OrderSummary onBuy={onNext} />
          </Col>
        </Row>
      </Box>
    </>
  );
};

export default Origin;
