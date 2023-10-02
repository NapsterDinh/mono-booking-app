import { useModal } from '@customer-web/state/global/hooks';
import { useCanBuyProductList, useCheckRebuying, useRebuyOrder, useRebuying } from '@customer-web/state/order/hooks';
import { AtomBoxProps } from '@tsu-org/ui';
import { Button, Divider, Modal, Row, Text } from '@tsu-org/ui-kit';
import VirtualList from 'rc-virtual-list';
import { FC, useMemo } from 'react';
import Loading from './Loading';
import RebuyItems from './RebuyItems';

interface RebuyProductListModalProps extends AtomBoxProps {
  productList: NhapThuocResponse.Orders.ReBuyConditionProduct[];
  open: boolean;
  orderCode: string;
}
const RebuyProductListModal: FC<RebuyProductListModalProps> = ({ productList, open, orderCode }) => {
  const rebuyOrder = useRebuyOrder();
  const checkRebuying = useCheckRebuying();
  const rebuying = useRebuying();
  const { closeModal } = useModal();
  const hasCanBuyProduct = useMemo(() => {
    return productList?.some((product) => !product?.isCannotBuy);
  }, [productList]);

  const canbuyProductList = useCanBuyProductList();

  const handleSubmitRebuy = () => {
    if (rebuying || !hasCanBuyProduct) {
      return;
    }
    const params: {
      orderCode: string;
      productListRebuy: NhapThuocResponse.Orders.ParamCanBuyProductList[];
    } = {
      orderCode,
      productListRebuy: canbuyProductList,
    };

    rebuyOrder(params);
  };

  const handleCancel = () => {
    if (checkRebuying || rebuying) return;

    closeModal();
  };

  return (
    <Modal
      open={open}
      onCancel={handleCancel}
      centered
      width={window.innerWidth / 2}
      title={
        <>
          <Row
            justifyContent={'center'}
            width={'auto'}
            paddingX={'3'}
          >
            <Text
              bold
              fontSize={24}
            >
              Mua lại đơn hàng
            </Text>
          </Row>
          <Divider my="0p75rem" />
        </>
      }
      footer={
        <Row gap="3">
          <Button
            type="secondary"
            scale="xl"
            width="100%"
            onClick={handleCancel}
          >
            Hủy
          </Button>

          <Button
            scale="xl"
            width="100%"
            loading={rebuying}
            disabled={checkRebuying || !hasCanBuyProduct}
            onClick={handleSubmitRebuy}
          >
            Xác nhận
          </Button>
        </Row>
      }
    >
      {checkRebuying && <Loading />}
      {productList?.length > 5 ? (
        <VirtualList
          data={productList}
          itemKey="id"
          height={450}
          itemHeight={167}
        >
          {(item) => (
            <RebuyItems
              isCannotBuy={item?.isCannotBuy}
              item={item}
              key={item.itemCode}
            />
          )}
        </VirtualList>
      ) : (
        productList?.map((item) => {
          return (
            <RebuyItems
              item={item}
              key={item.itemCode}
              isCannotBuy={item.isCannotBuy}
            />
          );
        })
      )}
    </Modal>
  );
};

export default RebuyProductListModal;
