import { DISPLAY_CODE } from '@customer-web/enums/Product';
import { UserStatus } from '@customer-web/enums/User';
import { convertPriceToVNDPrice } from '@customer-web/helpers/Utils';
import { useAuthenticated, useIsInBlacklist, useUserId, useUserStatus } from '@customer-web/state/user/hooks';
import { AtomBox } from '@tsu-org/ui';
import { Column, Image, Row, Text } from '@tsu-org/ui-kit';
import isNil from 'lodash/isNil';
import Link from 'next/link';
import { useMemo, type FC } from 'react';
import type { BestSellerListProps } from './types';

const BestSellerList: FC<BestSellerListProps> = ({ products }) => {
  const isAuthenticated = useAuthenticated();
  const isInBlacklist = useIsInBlacklist();
  const userId = useUserId();
  const userStatus = useUserStatus();
  const isInDrugMenu = useMemo(
    () => products?.some((product) => product?.category?.some((category) => category?.name?.includes('Thuốc'))),
    [products],
  );

  if (!products?.length) {
    return null;
  }

  if (isInDrugMenu && (!userId || userStatus !== UserStatus.APPROVED || isInBlacklist)) {
    return null;
  }

  return (
    <AtomBox
      px="3"
      pt="2"
      pb="3"
    >
      <Text
        color="#020B27"
        mb="0.75rem"
        bold
      >
        Bán chạy nhất
      </Text>
      <Row
        gap="2p5rem"
        alignItems="flex-start"
      >
        {products?.map((product) => (
          <Column
            width="1of5"
            key={product.sku}
          >
            <Link href={product.slug || '/'}>
              <div>
                <AtomBox
                  bg="white"
                  p="2"
                  mb="2"
                  borderRadius="12px"
                >
                  <Image
                    aspectRatio="1/1"
                    alt={product.webName}
                    src={product.image}
                    showLoading
                    width="100%"
                    dimension={1}
                    useCDN
                    cdnWidth={150}
                  />
                </AtomBox>
                <Text
                  color="#020B27"
                  small
                  mb="1"
                  fontWeight="500"
                  textTransform="capitalize"
                  lineClamp={3}
                >
                  {product.webName || product.name}
                </Text>

                {isAuthenticated &&
                  !product.notBuy &&
                  product.displayCode === DISPLAY_CODE.VIEW &&
                  !isNil(product.price?.discount?.finalPrice) && (
                    <>
                      <Row alignItems="center">
                        <Text
                          color="darkOrangeSecondary"
                          bold
                        >
                          {convertPriceToVNDPrice(product.price?.discount?.finalPrice ?? 0)}
                        </Text>
                        <AtomBox mx="1">
                          <Text
                            color="darkOrangeSecondary"
                            bold
                          >
                            /
                          </Text>
                        </AtomBox>

                        <AtomBox>
                          <Text
                            color="darkOrangeSecondary"
                            bold
                          >
                            {product.price?.measureUnitName}
                          </Text>
                        </AtomBox>
                      </Row>

                      {product.price?.discount && Number(product.price.discount.discountPrice) > 0 ? (
                        <Row>
                          <Text bold>{convertPriceToVNDPrice(product.price?.discount?.finalPrice ?? 0)}</Text>
                        </Row>
                      ) : null}
                    </>
                  )}
              </div>
            </Link>
          </Column>
        ))}
      </Row>
    </AtomBox>
  );
};

export default BestSellerList;
