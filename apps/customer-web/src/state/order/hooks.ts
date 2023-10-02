import { ModalType } from '@customer-web/enums/index';
import { notification } from 'antd';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { AppState, useAppDispatch } from '..';
import { useModal } from '../global/hooks';
import { checkRebuyOrder, rebuyOrder } from './actions';

export function useOrderState(): AppState['order'] {
  return useSelector<AppState, AppState['order']>((state) => state.order);
}

export function useCreatingOrder(): AppState['order']['creating'] {
  return useSelector<AppState, AppState['order']['creating']>((state) => state.order.creating);
}

export function useCanBuyProductList(): AppState['order']['productListRebuy'] {
  return useSelector<AppState, AppState['order']['productListRebuy']>((state) => state.order.productListRebuy);
}

export function useCreateOrderErrorCode() {
  return useSelector<AppState, AppState['order']['createOrderErrorCode']>((state) => state.order?.createOrderErrorCode);
}

export function useRebuyOrder() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const rebuy = async (params: {
    orderCode: string;
    productListRebuy: NhapThuocResponse.Orders.ParamCanBuyProductList[];
  }) => {
    try {
      await dispatch(rebuyOrder(params));

      router.push('/gio-hang');
    } catch (error) {
      if (error)
        notification.error({
          message: 'Có lỗi xảy ra!',
        });
    }
  };

  return rebuy;
}

export function useRebuying(): AppState['order']['rebuying'] {
  return useSelector<AppState, AppState['order']['rebuying']>((state) => state.order.rebuying);
}
export function useCheckRebuying(): AppState['order']['checkRebuying'] {
  return useSelector<AppState, AppState['order']['checkRebuying']>((state) => state.order.checkRebuying);
}
export function useRebuyOrderProductList(): AppState['order']['checkRebuyOrderResponse'] {
  return useSelector<AppState, AppState['order']['checkRebuyOrderResponse']>(
    (state) => state.order.checkRebuyOrderResponse,
  );
}

export function useCheckRebuyOrder() {
  const dispatch = useAppDispatch();

  const { openModal } = useModal();

  const checkRebuy = async (orderCode: string) => {
    try {
      openModal(ModalType.REBUY_PRODUCTS);
      await dispatch(checkRebuyOrder(orderCode))?.unwrap();
    } catch (error) {
      if (error)
        notification.error({
          message: 'Có lỗi xảy ra!',
        });
    }
  };

  return { checkRebuy };
}
