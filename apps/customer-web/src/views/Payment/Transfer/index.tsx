import { useOrderQuery } from '@customer-web/hooks/queries';
import Loading from '@customer-web/views/Order/components/Loading';
import { Flex, Text } from '@tsu-org/ui-kit';
import { useRouter } from 'next/router';
import TransferInfo from './components/TransferInfo';

const Transfer = () => {
  const router = useRouter();
  const orderCode = router.query.orderCode as string;

  const { data: order, isLoading } = useOrderQuery(orderCode, {
    refetchInterval: 1000 * 60,
  });

  if (isLoading) {
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

  if (!order?.transferInfoData) {
    return (
      <Flex
        alignItems="center"
        justifyContent="center"
        flexGrow="1"
        minHeight="300px"
      >
        <Text fontWeight="500">Đơn hàng không phải đơn thanh toán chuyển khoản</Text>
      </Flex>
    );
  }

  return <TransferInfo order={order} />;
};

export default Transfer;
