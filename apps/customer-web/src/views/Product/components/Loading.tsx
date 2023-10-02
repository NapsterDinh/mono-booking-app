import styled from '@emotion/styled';
import { AtomBox } from '@tsu-org/ui';
import { Box, Row } from '@tsu-org/ui-kit';
import { Col, Row as AntdRow, Skeleton } from 'antd';

const SkeletonImage = styled(Skeleton.Image)`
  &.ant-skeleton {
    aspect-ratio: 1;
    width: 100%;

    .ant-skeleton-image {
      height: 100%;
      width: 100%;
    }
  }
`;

const Loading = () => {
  return (
    <Box
      p={{
        _: '1rem 0rem',
      }}
    >
      <AtomBox mb="1p5rem"></AtomBox>

      <AtomBox
        p="3"
        bgc="white"
        borderRadius="12px"
      >
        <AntdRow gutter={[32, 32]}>
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
              <SkeletonImage active />
            </AtomBox>
          </Col>

          <Col
            lg={{ span: 15 }}
            span={24}
          >
            <Row
              gap="1"
              mb="0p75rem"
            >
              <Row
                gap="1"
                mb="0p75rem"
              >
                <Skeleton active />
              </Row>
            </Row>

            <AtomBox mb="3">
              <Skeleton active />
            </AtomBox>
          </Col>
        </AntdRow>
      </AtomBox>
    </Box>
  );
};

export default Loading;
