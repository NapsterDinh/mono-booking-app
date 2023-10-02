import styled from '@emotion/styled';
import { AtomBox } from '@tsu-org/ui';
import { Image } from 'antd';
import clsx from 'clsx';
import { Flex, RowBetween, Text } from '@tsu-org/ui-kit';
import map from 'lodash/map';
import Link from 'next/link';
import type { FC } from 'react';
import { StyledAside } from './styles';
import type { AsideProps } from './types';
import { CaretRightOutlined } from '@ant-design/icons';

const NavItemSeparator = styled(AtomBox)``;

NavItemSeparator.defaultProps = {
  backgroundColor: 'cardBorder',
  height: '1px',
  mr: '3',
};

const NavItem = styled.div`
  &:hover,
  &.active {
    background-color: ${({ theme }) => theme.colors.functionYellow2};
    border-radius: 8px 0 0 8px;
    font-weight: 600;

    ${NavItemSeparator} {
      background-color: transparent;
    }
  }
`;

const Aside: FC<AsideProps> = ({ activeCategoryIndex, level2Categories, onMouseEnter }) => {
  return (
    <StyledAside>
      <nav>
        {map(level2Categories, (category, index) => (
          <NavItem
            className={clsx({
              active: activeCategoryIndex === index,
            })}
            key={category.name}
            onMouseEnter={onMouseEnter?.bind(this, index)}
          >
            <Link href={category.fullPathSlug || '/'}>
              <RowBetween
                py="0p75rem"
                px="3"
                width="full"
                flexWrap="nowrap"
              >
                <Flex width="100%">
                  <AtomBox flexShrink={0}>
                    <Image
                      alt={category.image?.alt}
                      src={category.image?.url}
                      width={24}
                      height={24}
                      preview={false}
                    />
                  </AtomBox>

                  <Text
                    color="#020B27"
                    small
                    ml="0.75rem"
                    fontWeight="500"
                    ellipsis
                  >
                    {category.name}
                  </Text>
                </Flex>

                <Text
                  color="darkOrange"
                  display={activeCategoryIndex === index ? 'block' : 'none'}
                >
                  <CaretRightOutlined />
                </Text>
              </RowBetween>
            </Link>

            {index !== level2Categories!.length - 1 && <NavItemSeparator />}
          </NavItem>
        ))}
      </nav>
    </StyledAside>
  );
};

export default Aside;
