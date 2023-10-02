import styled from '@emotion/styled';
import { ModalType } from '@customer-web/enums/index';
import useHandleSuccessUpdateCart from '@customer-web/hooks/useHandleSuccessUpdateCart';
import {
  useCartActions,
  useCartItems,
  useIsSelectAllCartItems,
  useSelectedCartItems,
  useTotalUniqueCartItems,
} from '@customer-web/state/cart/hooks';
import { useIsCartLoading, useModal } from '@customer-web/state/global/hooks';
import type { AtomBoxProps } from '@tsu-org/ui';
import { AtomBox } from '@tsu-org/ui';
import { Button, Image, RowBetween, Text } from '@tsu-org/ui-kit';
import { BinIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { useDebounceFn, useResponsive } from 'ahooks';
import { Checkbox, Col, Row } from 'antd';
import VirtualList from 'rc-virtual-list';
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { CartItemRow } from './CartItemRow';
import ConfirmRemoveSelectedCartItemsModal from './Modals/ConfirmRemoveSelectedCartItemsModal';

const ProductRow = styled(CartItemRow)``;

const ProductList = styled(AtomBox)`
  ${ProductRow} {
    &:not(:last-child) {
      border-bottom: 1px solid #e4e8ed;
    }
  }
`;

const CartItemsSelector: FC<AtomBoxProps> = (props) => {
  const cartItemsState = useCartItems();
  const selectedCartItems = useSelectedCartItems();
  const total = useTotalUniqueCartItems();
  const isSelectAll = useIsSelectAllCartItems();
  const { isOpenModal, type, openModal, closeModal } = useModal();
  const { adjustItem, selectItems, unselectItems } = useCartActions();
  const [_, setSelectedCartItemNeedToRemove] = useState<NhapThuocResponse.Carts.ListCart>();
  const responsive = useResponsive();
  const isLoading = useIsCartLoading();
  const [cartItems, setCartItems] = useState(cartItemsState);
  const handleSuccessUpdateCart = useHandleSuccessUpdateCart();

  const handleChange = (cartItem: NhapThuocResponse.Carts.ListCart, quantity: any) => {
    adjustItem(
      {
        sku: cartItem.productInfo.itemCode,
        price: {
          measureUnitCode: cartItem.unitCode,
        },
      },
      quantity,
    )
      ?.unwrap()
      .then((cartInfo) => {
        handleSuccessUpdateCart(cartInfo, cartItem.productInfo.itemCode);
      })
      .catch(() => {
        const index = cartItems.findIndex((item) => item.id === cartItem.id);
        const newCartItem = [
          ...cartItems.slice(0, index),
          {
            ...cartItem,
          },
          ...cartItems.slice(index + 1),
        ];

        setCartItems(newCartItem);
      });
  };

  const { run: emitChange } = useDebounceFn(handleChange, {
    wait: 500,
  });

  const handleClickSelectAllButton = () => {
    isSelectAll ? unselectAllItems() : selectAllItems();
  };

  const selectAllItems = () => {
    selectItems(cartItems);
  };

  const unselectAllItems = () => {
    unselectItems(cartItems);
  };

  const handleSelectItem = (item: NhapThuocResponse.Carts.ListCart) => {
    if (item.isSelected) {
      unselectItems([item]);
    } else {
      selectItems([item]);
    }
  };

  const handleRemoveItemButtonClicked = (item: NhapThuocResponse.Carts.ListCart) => {
    setSelectedCartItemNeedToRemove(item);
    openModal(ModalType.CONFIRM_REMOVE_ITEM_FROM_CART, {
      cartItem: item,
      selectedCartItems,
    });
  };

  const handleCloseConfirmRemoveSelectedCartItemsModal = () => {
    setSelectedCartItemNeedToRemove(undefined);
    closeModal();
  };

  const handleRemoveSelectedCartItemsButtonClicked = () => {
    setSelectedCartItemNeedToRemove(undefined);
    openModal(ModalType.CONFIRM_REMOVE_ITEM_FROM_CART, {
      selectedCartItems,
    });
  };

  useEffect(() => {
    setCartItems(cartItemsState);
  }, [cartItemsState]);

  const productSelected = () => {
    return (
      <AtomBox
        bgc="white"
        borderTopRadius={{
          lg: '12px',
        }}
        px="3"
        py="2"
        mb={[null, null, null, '1']}
        borderBottom={{
          lg: 'none',
          xs: '1',
        }}
      >
        <Row
          style={{ alignItems: 'center' }}
          gutter={16}
        >
          <Col span={24}>
            <RowBetween>
              <Checkbox
                indeterminate={!isSelectAll && selectedCartItems?.length > 0}
                checked={isSelectAll}
                disabled={isLoading}
                onClick={handleClickSelectAllButton}
              >
                <Text
                  fontSize="13px"
                  fontWeight="500"
                >
                  Chọn tất cả ({total})
                </Text>
              </Checkbox>
              <Button
                mr="2"
                type="link"
                onClick={selectedCartItems.length ? handleRemoveSelectedCartItemsButtonClicked : undefined}
              >
                <Text
                  color={selectedCartItems.length ? 'textTertiary' : 'textDisabled'}
                  small
                  mr="0.5rem"
                >
                  Xóa sản phẩm đã chọn
                </Text>
                <BinIcon color={selectedCartItems.length ? 'textTertiary' : 'textDisabled'} />
              </Button>
            </RowBetween>
          </Col>
        </Row>
      </AtomBox>
    );
  };

  const cartEmpty = () => {
    return (
      <AtomBox textAlign="center">
        <Image
          src="/estore-images/ico-error.svg"
          alt=""
          width={150}
        />{' '}
        <br />
        <span>Bạn chưa thêm sản phẩm nào vào giỏ hàng</span>
      </AtomBox>
    );
  };

  return (
    <AtomBox {...props}>
      {cartItems?.length > 0 ? productSelected() : cartEmpty()}

      {cartItems?.length > 0 && responsive.lg && (
        <AtomBox
          bgc="white"
          px="3"
          py="2"
          mb="1"
        >
          <Row gutter={[16, 16]}>
            <Col span={7}>
              <Text
                fontSize="13px"
                fontWeight="500"
              >
                Tên sản phẩm
              </Text>
            </Col>
            <Col span={3}>
              <Text
                textAlign="center"
                fontSize="13px"
                fontWeight="500"
              >
                Đơn vị
              </Text>
            </Col>
            <Col span={3}>
              <Text
                textAlign="right"
                fontSize="13px"
                fontWeight="500"
              >
                Đơn giá
              </Text>
            </Col>
            <Col span={5}>
              <Text
                textAlign="center"
                fontSize="13px"
                fontWeight="500"
              >
                Số lượng
              </Text>
            </Col>
            <Col span={4}>
              <Text
                textAlign="right"
                fontSize="13px"
                fontWeight="500"
              >
                Thành tiền
              </Text>
            </Col>
            <Col span={2} />
          </Row>
        </AtomBox>
      )}

      {cartItems?.length > 0 && (
        <ProductList
          bgc="white"
          borderBottomRadius="12px"
          px={[null, null, null, '3']}
          py="2"
        >
          {cartItems.length > 5 ? (
            <VirtualList
              data={cartItems}
              itemKey="id"
              height={450}
              itemHeight={167}
            >
              {(item) => (
                <ProductRow
                  key={item.id}
                  item={item}
                  onSelectItem={handleSelectItem}
                  onChangeQuantity={emitChange}
                  onRemove={handleRemoveItemButtonClicked}
                />
              )}
            </VirtualList>
          ) : (
            cartItems.map((item) => (
              <ProductRow
                key={item.id}
                item={item}
                onSelectItem={handleSelectItem}
                onChangeQuantity={emitChange}
                onRemove={handleRemoveItemButtonClicked}
              />
            ))
          )}
        </ProductList>
      )}

      <ConfirmRemoveSelectedCartItemsModal
        open={isOpenModal && type === ModalType.CONFIRM_REMOVE_ITEM_FROM_CART}
        onCancel={handleCloseConfirmRemoveSelectedCartItemsModal}
      />
    </AtomBox>
  );
};

export default CartItemsSelector;
