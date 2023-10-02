import { Col, Row } from 'antd';
import Layout from './components/Layout';
import { Box, Text } from '@tsu-org/ui-kit';
import { Fragment } from 'react';

const licenses = [
  {
    name: 'GIẤY CHỨNG NHẬN ĐẠT "THỰC HÀNH TỐT PHÂN PHỐI THUỐC, NGUYÊN LIỆU LÀM THUỐC" (GDP)',
    number: '1440/GDP',
  },
  {
    name: 'GIẤY CHỨNG NHẬN ĐỦ ĐIỀU KIỆN KINH DOANH DƯỢC',
    number: '13352/ĐKKDD-HCM',
  },
];

const BusinessLicense = () => {
  return (
    <Layout>
      <Text
        fontSize="28px"
        bold
        mb="1rem"
      >
        Thông tin doanh nghiệp
      </Text>

      <Row gutter={[4, 4]}>
        <Col
          lg={{ span: 16 }}
          span={12}
        >
          <Box
            padding="0.5rem"
            backgroundColor="#C1C8D1"
            borderTopLeftRadius="4px"
            borderBottomLeftRadius="4px"
            height="100%"
          >
            <Text
              small
              fontWeight="500"
            >
              Giấy chứng nhận
            </Text>
          </Box>
        </Col>

        <Col
          lg={{ span: 8 }}
          span={12}
        >
          <Box
            padding="0.5rem"
            backgroundColor="#C1C8D1"
            borderTopRightRadius="4px"
            borderBottomRightRadius="4px"
            height="100%"
          >
            <Text
              textAlign="right"
              small
              fontWeight="500"
            >
              Số hiệu
            </Text>
          </Box>
        </Col>

        {licenses.map((license, index) => (
          <Fragment key={index}>
            <Col
              lg={{ span: 16 }}
              span={12}
            >
              <Box
                padding="0.5rem"
                backgroundColor="backgroundGrey2"
                borderTopLeftRadius="4px"
                borderBottomLeftRadius="4px"
              >
                <Text small>{license.name}</Text>
              </Box>
            </Col>

            <Col
              lg={{ span: 8 }}
              span={12}
            >
              <Box
                padding="0.5rem"
                backgroundColor="backgroundGrey2"
                borderTopRightRadius="4px"
                borderBottomRightRadius="4px"
                height="100%"
              >
                <Text
                  textAlign="right"
                  small
                >
                  {license.number}
                </Text>
              </Box>
            </Col>
          </Fragment>
        ))}
      </Row>
    </Layout>
  );
};

export default BusinessLicense;
