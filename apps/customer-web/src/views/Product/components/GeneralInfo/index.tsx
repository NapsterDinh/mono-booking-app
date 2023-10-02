import type { AtomBoxProps } from '@tsu-org/ui';
import { AtomBox } from '@tsu-org/ui';
import { Col, Row } from 'antd';
import type { FC } from 'react';
import LeftInfo from './LeftInfo';
import RightInfo from './RightInfo';

const GeneralInfo: FC<
  AtomBoxProps & {
    product?: NhapThuocResponse.SearchService.ProductSearchDetail;
  }
> = ({ product, ...rest }) => {
  return (
    <AtomBox
      p="3"
      bgc="white"
      borderRadius="12px"
      {...rest}
    >
      <Row gutter={[32, 32]}>
        <Col
          lg={{ span: 9 }}
          span={24}
        >
          <AtomBox
            mx="auto"
            width={{
              xs: '100%',
              md: '50%',
              lg: '100%',
            }}
          >
            <LeftInfo product={product} />
          </AtomBox>
        </Col>

        <Col
          lg={{ span: 15 }}
          span={24}
        >
          <RightInfo product={product} />
        </Col>
      </Row>
    </AtomBox>
  );
};

export default GeneralInfo;
