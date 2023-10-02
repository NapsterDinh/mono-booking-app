import styled from '@emotion/styled';
import { AtomBox } from '@tsu-org/ui';
import { Box, Text } from '@tsu-org/ui-kit';
import { Col, Row } from 'antd';
import parse from 'html-react-parser';
import type { FC } from 'react';
import { Fragment } from 'react';
import type { InfoSectionProps } from './types';

const StyledIngredients = styled(AtomBox)`
  p {
    margin-bottom: 0;
  }
`;

const DetailIngredients = styled.div`
  margin-top: 32px;

  li {
    line-height: 28px;
  }
`;

const Ingredients: FC<InfoSectionProps> = ({ content, product, ...rest }) => {
  if (!product?.ingredient?.length) {
    return null;
  }

  return (
    <StyledIngredients
      id="ingredients"
      as="section"
      {...rest}
    >
      <AtomBox>
        <Row gutter={[4, 4]}>
          <Col
            lg={{ span: 10 }}
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
                Thông tin thành phần
              </Text>
            </Box>
          </Col>

          <Col
            lg={{ span: 14 }}
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
                Hàm lượng
              </Text>
            </Box>
          </Col>

          {product?.ingredient?.map((ingredient) => (
            <Fragment key={ingredient.id}>
              <Col
                lg={{ span: 10 }}
                span={12}
              >
                <Box
                  padding="0.5rem"
                  backgroundColor="backgroundGrey2"
                  borderTopLeftRadius="4px"
                  borderBottomLeftRadius="4px"
                >
                  <Text small>{ingredient.name}</Text>
                </Box>
              </Col>

              <Col
                lg={{ span: 14 }}
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
                    {ingredient.shortDescription}
                  </Text>
                </Box>
              </Col>
            </Fragment>
          ))}
        </Row>
      </AtomBox>

      {content && <DetailIngredients>{parse(content)}</DetailIngredients>}
    </StyledIngredients>
  );
};

export default Ingredients;
