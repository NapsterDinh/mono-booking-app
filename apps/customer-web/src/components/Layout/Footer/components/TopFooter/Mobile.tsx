import styled from '@emotion/styled';
import { AtomBox } from '@tsu-org/ui';
import { Column, Link, RowBetween, RowFixed, Text } from '@tsu-org/ui-kit';
import { Collapse } from 'antd';
import map from 'lodash/map';
import Image from 'next/image';
import type { FC } from 'react';
import type { TopFooterProps } from '../../types';

const StyledCollapse = styled(Collapse)`
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 0;
  margin-bottom: 1rem;

  .ant-collapse-item {
    border-bottom: 1px solid #e4e8ed;
    margin: 0 1rem;

    .ant-collapse-content {
      border-top: none;
    }

    .ant-collapse-content-box {
      border-radius: 0.5rem;
      padding: 0 0 1rem 0;
    }

    .ant-collapse-header {
      padding-inline-start: 0 !important;
    }

    &:hover {
      .ant-collapse-header-text {
        & > * {
          color: ${({ theme }) => theme.colors.textFocus};
        }
      }
    }

    &:last-child {
      border-radius: 0;
    }
  }
`;

const { Panel } = Collapse;

const Mobile: FC<TopFooterProps> = ({ footer }) => {
  return (
    <AtomBox display={['block', null, null, 'none']}>
      <StyledCollapse>
        {!!footer?.callCenter && (
          <Panel
            key={footer.callCenter?.title}
            header={
              <Text
                color="textSecondary"
                small
                bold
              >
                {footer.callCenter?.title}
              </Text>
            }
            showArrow={false}
          >
            {map(footer?.callCenter.items, (item) => (
              <RowBetween key={item.title}>
                <Text
                  color="textTertiary"
                  small
                  fontWeight="500"
                >
                  {item.title}
                </Text>

                <RowFixed>
                  <Link
                    href={`tel:${item.phone}`}
                    small
                    bold
                    mr="0.25rem"
                  >
                    {item.phone}
                  </Link>
                  <Text
                    color="textTertiary"
                    small
                  >
                    ({item.note})
                  </Text>
                </RowFixed>
              </RowBetween>
            ))}
          </Panel>
        )}
        {map(footer?.items, (item) => {
          if (!item?.items?.length) {
            return null;
          }

          return (
            <Panel
              key={item.title}
              header={
                <Text
                  color="textSecondary"
                  small
                  bold
                >
                  {item.title}
                </Text>
              }
              showArrow={false}
            >
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
            </Panel>
          );
        })}

        {!!footer?.connect && (
          <>
            <Panel
              key={footer.connect?.title}
              header={
                <Text
                  color="textSecondary"
                  small
                  bold
                >
                  {footer.connect?.title}
                </Text>
              }
              showArrow={false}
            >
              <RowFixed gap="2">
                {map(footer?.connect?.items, (item) => (
                  <Link
                    aria-label={item?.title}
                    href={item?.redirectUrl || '/'}
                    small
                    bold
                    mr="0.25rem"
                    key={item?.title}
                  >
                    <Image
                      alt={item?.icon?.alt}
                      src={item?.icon?.url}
                      width={28}
                      height={28}
                    />
                  </Link>
                ))}
              </RowFixed>
            </Panel>
          </>
        )}
      </StyledCollapse>

      <AtomBox
        mb="3"
        px="3"
      >
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
              <Image
                width={100}
                height={100}
                alt={item.title}
                src={item.icon?.url}
                loading="lazy"
              />
            </Link>
          ))}
        </RowFixed>
      </AtomBox>
    </AtomBox>
  );
};

export default Mobile;
