import Container from '@customer-web/components/Container';
import Image from '@customer-web/components/Image';
import { AtomBox } from '@tsu-org/ui';
import { Column, Link, RowFixed, Text, Image as ui-kitImage } from '@tsu-org/ui-kit';
import { Col, Row } from 'antd';
import map from 'lodash/map';
import type { FC } from 'react';
import type { TopFooterProps } from '../../types';

const Desktop: FC<TopFooterProps> = ({ footer }) => {
  return (
    <AtomBox
      display={['none', null, null, 'block']}
      pt="1p5rem"
      pb="1p75rem"
    >
      <Container>
        <Row gutter={[16, 16]}>
          {map(footer?.items, (item) => {
            if (!item?.items?.length) {
              return null;
            }

            return (
              <Col
                key={item.title}
                lg={{ span: 6 }}
                span={12}
              >
                <AtomBox mb="0p75rem">
                  <Text
                    bold
                    color="textTertiary"
                    fontSize="12px"
                  >
                    {item.title}
                  </Text>
                </AtomBox>

                <Column gap="0p75rem">
                  {map(item.items, (subItem) => (
                    <Link
                      key={subItem.text}
                      href={subItem.redirectUrl || '/'}
                      small
                      external
                    >
                      {subItem.text}
                    </Link>
                  ))}
                </Column>
              </Col>
            );
          })}

          <Col
            lg={{ span: 6 }}
            span={12}
          >
            <AtomBox mb="0p75rem">
              <Text
                bold
                color="textTertiary"
                fontSize="12px"
              >
                {footer?.callCenter.title}
              </Text>
            </AtomBox>

            <Column gap="0p75rem">
              {map(footer?.callCenter.items, (subItem) => (
                <div key={subItem.title}>
                  <Text
                    color="textSecondary"
                    fontWeight="500"
                  >
                    {subItem.title}
                  </Text>
                  <Row>
                    <Link
                      href={`tel:${subItem.phone}`}
                      small
                      fontWeight="500"
                      mr="0.25rem"
                    >
                      {subItem.phone}
                    </Link>
                    <Text
                      color="textTertiary"
                      fontWeight="500"
                      small
                    >
                      ({subItem.note})
                    </Text>
                  </Row>
                </div>
              ))}

              <div>
                <Text
                  bold
                  color="textTertiary"
                  fontSize="12px"
                >
                  {footer?.certificated.title}
                </Text>
                <RowFixed gap="2">
                  {map(footer?.certificated.items, (item) => (
                    <Link
                      external
                      href={item.redirectUrl || '/'}
                      key={item.title}
                    >
                      <ui-kitImage
                        alt={item.title}
                        src={item.icon?.url}
                        preview={false}
                      />
                    </Link>
                  ))}
                </RowFixed>
              </div>
            </Column>
          </Col>

          <Col
            lg={{ span: 6 }}
            span={12}
          >
            <AtomBox mb="0p75rem">
              <Text
                bold
                color="textTertiary"
                fontSize="12px"
              >
                {footer?.connect.title}
              </Text>
            </AtomBox>

            <RowFixed gap="2">
              {map(footer?.connect.items, (item) => (
                <Link
                  aria-label={item?.title}
                  href={item?.redirectUrl || '/'}
                  small
                  fontWeight="500"
                  mr="0.25rem"
                  external
                  key={item?.title}
                >
                  <Image
                    alt={item?.icon?.alt}
                    src={item.icon?.url}
                    width={28}
                    height={28}
                    loading="lazy"
                  />
                </Link>
              ))}
            </RowFixed>
          </Col>
        </Row>
      </Container>
    </AtomBox>
  );
};

export default Desktop;
