import Refund from '@customer-web/views/Refund';
import Return from '@customer-web/views/Return';

export async function getServerSideProps(context: any) {
  // type = 2 là đơn trả hàng, ngược lại là đơn hoàn tiền
  const { type } = context.query;
  const isRefund = Number(type) !== 2;
  const props: any = {
    isRefund,
  };

  return {
    props,
  };
}

const RefundPage = (props) => {
  return <>{props.isRefund ? <Refund {...props} /> : <Return {...props} />}</>;
};

export default RefundPage;
