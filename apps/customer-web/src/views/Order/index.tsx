import ConfirmCancelOrderModal from '@customer-web/components/Modal/ConfirmCancelOrderModal';
import { useOrderQuery } from '@customer-web/hooks/queries';
import useOpenCloseModal from '@customer-web/hooks/useOpenCloseModal';
import { Flex, Text } from '@tsu-org/ui-kit';
import { useRouter } from 'next/router';
import Loading from './components/Loading';
import OrderInfo from './components/OrderInfo';

const Order = () => {
  const router = useRouter();

  const orderCode = router.query.orderCode as string;
  const { data: order, isFetching, refetch } = useOrderQuery(orderCode);

  const {
    isOpen: isOpenConfirmCancelOrderModal,
    openModal: openConfirmCancelOrderModal,
    closeModal: closeConfirmCancelOrderModal,
  } = useOpenCloseModal();

  const handleDeleteOrderButtonClicked = () => {
    openConfirmCancelOrderModal();
  };

  const handleSuccessDeleteOrder = () => {
    refetch();
    closeConfirmCancelOrderModal();
  };

  if (isFetching) {
    return <Loading />;
  }

  if (!order?.orderId) {
    return (
      <Flex
        alignItems="center"
        justifyContent="center"
        flexGrow="1"
        minHeight="300px"
      >
        <Text fontWeight="500">Đơn hàng không tồn tại</Text>
      </Flex>
    );
  }

  return (
    <>
      <OrderInfo
        order={order}
        onDeleteOrder={handleDeleteOrderButtonClicked}
      />

      <ConfirmCancelOrderModal
        open={isOpenConfirmCancelOrderModal}
        orderId={order.orderId}
        orderCode={order.orderCode}
        onCancel={closeConfirmCancelOrderModal}
        onOk={handleSuccessDeleteOrder}
      />
    </>
  );
};

export default Order;
